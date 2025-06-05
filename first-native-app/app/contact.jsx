import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

const contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>contact</ThemedText>
      <Spacer height={10}/> //!Make changes in height to manipulate space
      <Link href="/" style={styles.link}>
        <ThemedText>Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    borderBottomWidth: 1,
  },
});
