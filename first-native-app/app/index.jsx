import { StyleSheet, Text, useColorScheme } from "react-native";
import { Link } from "expo-router";

import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedTextInput from "../components/ThemedTextInput";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <ThemedText style={styles.title} title={true}>
        One Piece{" "}
      </ThemedText>
      <Spacer height={10} />
      <ThemedText>The best Anime in the world</ThemedText>
      <Spacer />

      <Link href="/register" style={styles.link}>
        <ThemedText>Register Now</ThemedText>
      </Link>

      <Link href="/login" style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>

      <Link href="/profile" style={styles.link}>
        <ThemedText>profile page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

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
    marginVertical: 10,
  },
});
