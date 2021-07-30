import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Breed as BreedScreen, Home } from "./screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BackButton, Filter } from "./containers";
import { Provider as BreedProvider } from "./hooks/useBreed";
import { Collections } from "./config";

const Stack = createStackNavigator();

export default function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <BreedProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: Collections.theme.palette.main.base,
              },
              headerBackTitleVisible: false,
              headerBackImage: () => <BackButton />,
            }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerTitle: () => <Filter />,
              }}
            />
            <Stack.Screen name="Breed" component={BreedScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </BreedProvider>
    </SafeAreaProvider>
  );
}
