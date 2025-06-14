import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { ScreenStack } from "react-native-screens";
import { Colors } from "../constants/Colors";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen
        name="contact"
        options={{ title: "Contact"}}
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
