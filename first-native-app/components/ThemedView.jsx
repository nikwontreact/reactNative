import { View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  if (!safe)
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );

  const insets = useSafeAreaInsets();
  console.log(insets);

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
