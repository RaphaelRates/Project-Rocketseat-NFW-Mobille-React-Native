import { View, Text } from 'react-native'
import React from 'react'
import { s } from './style'
import { colors } from '@/src/styles/theme'
import {IconProps} from "@tabler/icons-react-native"

type typeStep = {title: string, description: string, iconTabler: React.ComponentType<IconProps>}
const Step = ({title, description, iconTabler: Icon}: typeStep) => {
  return (
    <View style={s.container}>
        {Icon && <Icon size={32} color={colors.red.base} />}
        <View style={s.details}>
            <Text style={s.title}>{title}</Text>
            <Text style={s.description}>{description}</Text>
        </View>
    </View>
  )
}

export default Step