import React from "react";
import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Grid, GridItem, SafeAreaView } from "../components";
import { Api } from "../config";
import { Box } from "../containers";

export default function Home() {
  const [breeds, setBreeds] = useState<any>([]);
  const isMounted = useRef<any>();

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

  return (
    <ScrollView>
      <SafeAreaView>
        <Grid>
          {breeds.map((breed: any) => (
            <GridItem key={breed.name}>
              <Box breed={breed} />
            </GridItem>
          ))}
        </Grid>
      </SafeAreaView>
    </ScrollView>
  );
}
