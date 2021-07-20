import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Grid, GridItem, SafeAreaView } from "../components";
import { Api } from "../config";
import { Box } from "../containers";
import { Breed } from "../providers";

export default function Home() {
  const [breeds, setBreeds] = useState<any>([]);
  const isMounted = useRef<any>();
  const navigation = useNavigation();
  const { handleSet } = Breed.Consumer();

  useEffect(() => {
    (async function getBreed() {
      isMounted.current = true;

      if (!isMounted.current) {
        return null;
      }

      setBreeds(await Api.getBreed());
    })();

    return () => {
      isMounted.current = false;
    };
  }, []);
  function handlePressBox(breed: any) {
    navigation.navigate("Breed");
    handleSet({
      uri: breed.image.url,
      weight: breed.weight.metric,
      origin: breed["country_code"],
      lifeSpan: breed["life_span"],
      bredFor: breed["bred_for"],
      temperament: breed.temperament,
      wikipedia: "",
    });
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <Grid>
          {breeds.map((breed: any) => (
            <GridItem key={breed.name}>
              <Box breed={breed} onPress={() => handlePressBox(breed)} />
            </GridItem>
          ))}
        </Grid>
      </SafeAreaView>
    </ScrollView>
  );
}
