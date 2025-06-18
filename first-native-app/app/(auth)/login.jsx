import { StyleSheet, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Colors";

const login = () => {
  const handleSubmit = ()=>{
    console.log('Login form submitted')

  }
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>
        Login To Your Account
      </ThemedText>
      <ThemedButton onPress ={handleSubmit}>
        <Text style={{color:"#f2f2f2"}}> Login</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/register">
        <ThemedText style={{ textAlign: "center" }}>
          Register Instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center'

  },

  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  btn: {
    backgroundColor :Colors.primary,
    padding: 15,
    borderRadius: 5,
    borderColor:"red"
  },
  pressed: {
    opacity: 0.8,
  },
});
