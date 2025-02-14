import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '@/src/styles/theme'
import { IconProps } from '@tabler/icons-react-native'
import { s } from './style'

type Props = {
    description: string,
    icon: React.ComponentType<IconProps>
}

const Info = ({icon: Icon, description}: Props) => {
  return (
    <View style={s.container}>
        <Icon size={16} color={colors.gray[400]} />
        <Text style={s.text} >{description}</Text>
    </View>
  )
}

export default Info