import { Image,useColorScheme,View, Text } from 'react-native'
import React from 'react'
import DarkLogo from '../assets/logoDark.jpg'
import LightLogo from '../assets/logoLight.jpg'

const ThemedLogo = (...props) => {
    const colorScheme = useColorScheme();
    const logo = colorScheme === 'dark' ? DarkLogo:LightLogo 
  return (
    <View>
      <Image source={logo} {...props} />
    </View>
  )
}

export default ThemedLogo