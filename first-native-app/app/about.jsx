import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const about = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>About</ThemedText>
      <Spacer height={10}/> //! Make changes in height to make changes in space
      <Link href="/" style={styles.link}>
        <ThemedText>Home page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default about;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "900",
    fontSize: 18,
  },
  link: {
    borderBottomWidth: 1,
  },
});
