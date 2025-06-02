import { StyleSheet, View, Text, Image } from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/logo.webp";
const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30, fontWeight: "bold" }}>
        Reading list app
      </Text>
      <Link href="/about" style={styles.link}>
        About Page
      </Link>
      <Link href="/contact" style={styles.link}>
        contact Page
      </Link>
    </View>
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
    color: "red",
  },

  img: {
    height: "30%",
    resizeMode: "contain",
  },
  link: {
    borderBottomWidth: 1,
    marginVertical: 10,
    color: "blue",
  },
});
