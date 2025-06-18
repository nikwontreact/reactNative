import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";
import { Colors } from "react-native/Libraries/NewAppScreen";

const register = () => {
  const handleSubmit = ()=>{
    console.log("New account register")
  }
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register for an account
      </ThemedText>
      <ThemedButton onpress = {handleSubmit}>
        <Text style={{color:"#f2f2f2"}}> Register</Text>
      </ThemedButton>
      <Spacer height={100} />
      <Link href="/login">
        <ThemedText style={{ textAlign: "center" }}>Login Instead</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  },

  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
