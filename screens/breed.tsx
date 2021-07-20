import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  SectionList,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView, SectionListItem } from "../components";
import { Collections } from "../config";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: Dimensions.get("window").width - 32,
    borderRadius: Collections.theme.metrics.spacing,
  },
  sectionListItem: {
    marginTop: Collections.theme.metrics.spacing,
  },
  text: {
    marginVertical: Collections.theme.metrics.spacing * 2,
  },
});
const breed: any = { breedFor: null };

export default function Breed() {
  return (
    <ScrollView>
      <SafeAreaView>
        <Image
          style={styles.image}
          source={{
            uri: "https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png",
          }}
        />
        <SectionList
          sections={[
            {
              data: [
                { icon: "weight", primary: "weight", secondary: "4 Kilogram" },
                {
                  icon: "origin",
                  primary: "origin",
                  secondary: "Egypt • Middle East",
                },
              ],
            },
          ]}
          renderItem={({ item: { icon, primary, secondary } }) => (
            <SectionListItem
              style={styles.sectionListItem}
              icon={icon}
              primary={primary}
              secondary={secondary}
            />
          )}
        />
        <Text style={styles.text}>
          This cute dog is know for {breed.breedFor}.
        </Text>
        <Button title="Know more" />
      </SafeAreaView>
    </ScrollView>
  );
}
