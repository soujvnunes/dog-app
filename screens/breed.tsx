import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { Image, StyleSheet, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "../components";
import { Collections } from "../config";
import { Tape } from "../containers";
import { Breed as BreedTree } from "../providers";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: Dimensions.get("window").width - 32,
    borderRadius: Collections.theme.metrics.spacing,
  },
  tape: {
    marginTop: Collections.theme.metrics.spacing,
  },
  text: {
    marginVertical: Collections.theme.metrics.spacing * 2,
  },
});

export default function Breed() {
  const navigation = useNavigation();
  const { data } = BreedTree.Consumer();
  const renderTapes = [
    { icon: "weight", primary: "weight", secondary: `${data.weight} kg` },
    {
      icon: "lifeSpan",
      primary: "life span",
      secondary: data.lifeSpan,
    },
  ].map(({ icon, primary, secondary }) => (
    <Tape
      key={primary}
      style={styles.tape}
      icon={icon}
      primary={primary}
      secondary={secondary}
    />
  ));

  useEffect(() => {
    navigation.setOptions({ title: data.name });
  }, [data]);

  console.log(data);

  return (
    <ScrollView>
      <SafeAreaView>
        <Image
          style={styles.image}
          source={{
            uri: data.uri,
          }}
        />
        {renderTapes}
        <Text style={styles.text}>
          The {data.name} breed is kind of {data.temperament.toLowerCase()}
          {data.bredFor
            ? `, being able for ${data.bredFor.toLowerCase()}.`
            : "."}
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
}
