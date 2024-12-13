import { StyleSheet } from "react-native";
import {colors, fontFamily} from "@style/theme"

export const s = StyleSheet.create({
    container: {
        borderRadius: 8,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        height: 36,
        backgroundColor: colors.gray[100],
        borderWidth: 1,
        gap: 10,
        borderColor: colors.gray[300]
    },
    name:{
       fontSize: 14,
       color: colors.gray[500],
       fontFamily: fontFamily.regular
    },
    conteinerSelected: {
        backgroundColor: colors.green.base,
        borderColor: colors.green.base,
        borderWidth: 1
    },
    nameSelected: {
        color: colors.gray[100]
    }
})