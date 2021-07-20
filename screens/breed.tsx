import React from "react";
import { Image, StyleSheet, Text, Dimensions, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "../components";
import { Collections } from "../config";
import { Tape, Button } from "../containers";
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
  const { data } = BreedTree.Consumer();
  const renderTapes = [
    { icon: "weight", primary: "weight", secondary: `${data.weight} kg` },
    {
      icon: "origin",
      primary: "origin",
      secondary: data.origin,
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
          Also known as _alt_names_, the name breed is a kind of _temperament_,
          being able for _bred_for_.
        </Text>
        <Button onPress={() => Linking.openURL(data.wikipedia)} icon="extern">
          Know more
        </Button>
      </SafeAreaView>
    </ScrollView>
  );
}
