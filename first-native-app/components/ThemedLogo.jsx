import { Image, useColorScheme, View, Text } from "react-native";
import React from "react";
import DarkLogo from "../assets/Darklogo.jpg";
import LightLogo from "../assets/logoLight.jpg";

const ThemedLogo = ({style,...props}) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;
  return (
    <View>
      <Image source={logo} 
      style={[{width:'300',height:"300"},style]}
      resizeMode="contain"
      {...props} />
    </View>
  );
};

export default ThemedLogo;
