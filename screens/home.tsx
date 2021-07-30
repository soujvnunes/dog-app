import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Grid, GridItem, SafeAreaView } from "../components";
import { Api } from "../config";
import { Box } from "../containers";
import useBreed from "../hooks/useBreed";

export default function Home() {
  const [breeds, setBreeds] = useState<any>([]);
  const isMounted = useRef<any>();
  const navigation = useNavigation();
  const { setBreed } = useBreed();

  useEffect(() => {
    (async function getBreed() {
      isMounted.current = true;

      if (isMounted.current) {
        try {
          const breed = await Api.getBreed();

          setBreeds(breed);
        } catch (error) {
          console.log("Home getBreed", error);
        }
      }
    })();

    return () => {
      isMounted.current = false;
    };
  }, []);
  function handlePressBox(breed: any) {
    navigation.navigate("Breed");
    setBreed({
      name: breed.name,
      uri: breed.image.url,
      weight: breed.weight.metric,
      lifeSpan: breed["life_span"],
      bredFor: breed["bred_for"],
      temperament: breed.temperament,
    });
  }

  return (
    <>
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
    </>
  );
}
