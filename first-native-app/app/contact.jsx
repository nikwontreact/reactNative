import { StyleSheet, Text, View ,useColorScheme} from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";
import React from "react";

const contact = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View style= {[styles.container,{backgroundColor:theme.background}]}>
      <Text style= {[styles.title,{color:theme.text}]}>contact</Text>
      <Link href="/" style= { [styles.link,{color:theme.text,borderBottomColor:theme.text}]}>Home </Link>
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