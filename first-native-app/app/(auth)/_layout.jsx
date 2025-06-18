import {StatusBar} from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <>
      <StatusBar style="auto"/>
      <Stack screenOptions={{ animation:'none'}}
      />
    </>
  )
}

export default _layout