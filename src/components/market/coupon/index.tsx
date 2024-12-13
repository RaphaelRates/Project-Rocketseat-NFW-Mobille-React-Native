import { View, Text } from 'react-native'
import React from 'react'
import { IconTicket } from '@tabler/icons-react-native'
import {s} from "./style"
import { colors } from '@/src/styles/theme'

type Props = {
    code: string
}

const Coupon = ({code} : Props) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Utilize esse Cupom</Text>
      <View style={s.content}>
        <IconTicket size={24} color={colors.green.light} />
        <Text style={s.code}>{code}</Text>
      </View>
    </View>
  )
}

export default Coupon