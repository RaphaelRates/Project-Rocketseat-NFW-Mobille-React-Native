import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colors} from "@style/theme"
import Welcome from '@components/welcome'
import Steps from '@components/steps'
import {Button} from '@components/button'
import { IconPlus } from '@tabler/icons-react-native'
import { router } from 'expo-router'

export default function Index(){
    return (
        <View style={[s.container]}>
            <Welcome/>
            <Steps/>
            <Button onPress={() =>router.navigate("/home")}>
                <Button.Title>Começar</Button.Title>
            </Button>
        </View>
    )
}


const s = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        gap: 40
    }
})