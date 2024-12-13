import { ActivityIndicator} from 'react-native'
import React from 'react'
import { s } from './style'
import { colors } from '@/src/styles/colors'
import { ActivityIndicatorProps } from 'react-native'

export type loadingProps = ActivityIndicatorProps & {
  size: string
}

const Loading = ({size = "small", ...rest}: loadingProps) => {
  return (
    < ActivityIndicator
    size={size}
    color={rest.color? rest.color : colors.green.base}
    style={s.container}
    />
  )
}

export default Loading