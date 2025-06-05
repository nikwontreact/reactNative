import {StyleSheet, View, Text ,useColorScheme} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'



const about = () => {
   
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View style ={[styles.container,{backgroundColor: theme.background}]} >
      <Text style = {[styles.title,{color:theme.text}]}>About</Text>
      <Link href='/' style= {[styles.link,{color: theme.text,borderBottomColor:theme.text}]} > Home page</Link>
    </View>
  )
}

export default about
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: '900',
    fontSize: 18,
    color: "red",
  },
  link: {
    borderBottomWidth:1,
    marginVertical:10,
    color:'blue',
    
  }

});
