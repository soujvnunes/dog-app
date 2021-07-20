import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Breed as BreedScreen, Home } from "./screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "./containers";
import { Breed } from "./providers";

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  const options = {
    header: (props) => <Header {...props} />,
  };

  return (
    <SafeAreaProvider>
      <Breed.Provider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={options} />
            <Stack.Screen
              name="Breed"
              component={BreedScreen}
              options={options}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Breed.Provider>
    </SafeAreaProvider>
  );
}
