import React from "react";
import { Text, Pressable, PressableProps } from "react-native";
import {s} from "./style"
import { categoriesIcons } from "@/src/utils/categories-icons";
import { colors } from "@/src/styles/colors";

type Props = PressableProps & {
    iconId: string,
    isSelected?: boolean,
    name: string
}

export const Category = ({name, iconId, isSelected = false,...rest}: Props) => {
    const Icon = categoriesIcons[iconId]
  return (
    <Pressable style={[s.container, isSelected && s.conteinerSelected]} {...rest}>
        <Icon size={16} color={colors.gray[isSelected ? 100: 400]}/>
      <Text style={[isSelected?s.nameSelected : s.name]}>{name}</Text>
    </Pressable>
  )
}
