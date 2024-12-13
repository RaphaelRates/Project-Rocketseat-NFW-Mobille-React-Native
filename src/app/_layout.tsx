import React from 'react'
import { Stack } from 'expo-router'
import { colors } from '../styles/colors'
import {
     GestureHandlerRootView 
    } from 'react-native-gesture-handler'
import {    
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
} from "@expo-google-fonts/rubik"
import Loading from '@components/loading'


const Layout = () => {
    const [fontLoader] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold
    })

    if(!fontLoader){
        return <Loading/>
    } 
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <Stack screenOptions={{
        headerShown: false,
        contentStyle: {
            backgroundColor: colors.gray[100],
        }
    }}/>
    </GestureHandlerRootView>
    
  )
}

export default Layout

