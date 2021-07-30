import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { Image, StyleSheet, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "../components";
import { Collections } from "../config";
import { Tape } from "../containers";
import useBreed from "../hooks/useBreed";

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
  const { breed } = useBreed();
  const renderTapes = [
    { icon: "weight", primary: "weight", secondary: `${breed.weight} kg` },
    {
      icon: "lifeSpan",
      primary: "life span",
      secondary: breed.lifeSpan,
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
    navigation.setOptions({ title: breed.name });
  }, [breed]);

  return (
    <ScrollView>
      <SafeAreaView>
        <Image
          style={styles.image}
          source={{
            uri: breed.uri,
          }}
        />
        {renderTapes}
        <Text style={styles.text}>
          The <Text style={{ fontWeight: "bold" }}>{breed.name}</Text> breed has
          a{" "}
          <Text style={{ fontWeight: "bold" }}>
            {breed.temperament.toLowerCase()}
          </Text>{" "}
          way
          {breed.bredFor ? (
            <>
              , being able for{" "}
              <Text style={{ fontWeight: "bold" }}>
                {breed.bredFor.toLowerCase()}
              </Text>
              .
            </>
          ) : (
            "."
          )}
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
}
