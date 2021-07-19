import React, { Component } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "../components";

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Icon size="larger" color="accent">
          logo
        </Icon>
        <Icon color="main">filter</Icon>
        <Text>Open up App.tsx to start working on your app!</Text>
      </SafeAreaView>
    );
  }
}
