import {
    Text,
    TextProps,
    TouchableOpacity,
    TouchableOpacityProps,
    ActivityIndicator
} from "react-native"
import React from 'react'
import { s } from "./style"
import {colors, fontFamily} from "@style/theme"
import { IconProps as TablerIconProps } from "@tabler/icons-react-native"

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}
type IconProps = {
  icon: React.ComponentType<TablerIconProps>
}

const Button = ({children,style, isLoading = false, ...props}: ButtonProps) => {
  return <TouchableOpacity style={[s.container, style]} disabled={isLoading} {...props}>
    {isLoading ? <ActivityIndicator size={"small"} color={colors.gray[100]}/> :children}
    </TouchableOpacity>
}

function Title({children}:TextProps){
  return <Text style={s.title} >{children}</Text>
}

function Icon({icon: Icon}:IconProps){
  return <Icon size={24} color={colors.gray[100]} />
}
Button.Title = Title
Button.Icon = Icon

export {Button}