import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

const contact = () => {
  return (
    <View style= {styles.container}>
      <Text style= {styles.title}>contact</Text>
      <Link href="/" style= { styles.link}>Home </Link>
    </View>
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
    color: "red",
  },
  link: {
    borderBottomWidth: 1,
    marginVertical: 10,
    color: "blue",
  },
});
