import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import {Button} from "@components/button"
import {s} from "./style"
import { router } from 'expo-router'
import { IconArrowLeft } from '@tabler/icons-react-native'

export type Props = {
    uri: string
}

const Cover = ({uri}: Props) => {
  return (
    <ImageBackground source={{uri }} style={s.container}>
        <View style={s.header}>
            <Button 
            style={{
                width: 40,
                aspectRatio: 1/1
            }}
            onPress={() => router.back()}
            >
                <Button.Icon icon={IconArrowLeft}/>
            </Button>
        </View>
    </ImageBackground>
  )
}

export default Cover