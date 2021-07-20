import React from "react";
import { Image, StyleSheet, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "../components";
import { Collections } from "../config";
import { Tape, Button } from "../containers";

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
const breed: any = { breedFor: null };

export default function Breed() {
  const renderTapes = [
    { icon: "weight", primary: "weight", secondary: "4 Kilogram" },
    {
      icon: "origin",
      primary: "origin",
      secondary: "Egypt • Middle East",
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

  return (
    <ScrollView>
      <SafeAreaView>
        <Image
          style={styles.image}
          source={{
            uri: "https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png",
          }}
        />
        {renderTapes}
        <Text style={styles.text}>
          This cute dog is know for {breed.breedFor}.
        </Text>
        <Button icon="extern">Know more</Button>
      </SafeAreaView>
    </ScrollView>
  );
}
