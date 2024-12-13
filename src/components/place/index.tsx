import { View, Text, TouchableOpacity, Image, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { s } from "./style"
import { IconCricket } from '@tabler/icons-react-native'
import { colors } from '@/src/styles/colors'

export type PlaceProps = {
  id: string,
  name: string,
  description: string,
  cupons: number,
  cover: string,
  address: string
}

type Props = TouchableOpacityProps & {
  data: PlaceProps
}

const Place = ({ data, ...rest }: Props) => {
  return (
    <TouchableOpacity style={s.container} {...rest}>
      <Image style={s.image} source={{ uri: data.cover }} />
      <View style={s.content}>
        <Text style={s.name}>{data.name}</Text>
        <Text style={s.description} numberOfLines={2}>{data.description}</Text>
        <View style={s.footer}>
          <IconCricket size={16} color={colors.red.base} />
          <Text style={s.tickerts}>
           {data.cupons} cupons disponíveis
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Place