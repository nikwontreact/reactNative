import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const about = () => {
  return (
    <View style ={styles.container} >
      <Text style = {styles.title}>About</Text>
      <Link href='/' style= {styles.link} > Home page</Link>
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
    fontWeight: "bold",
    fontSize: 18,
    color: "red",
  },
  link: {
    borderBottomWidth:1,
    marginVertical:10,
    color:'blue'
  }

});
