import { StyleSheet } from "react-native"
import { colors, fontFamily} from "@/src/styles/theme"

export const s = StyleSheet.create({
    container: {
        width: "100%",
        height: 232,
        marginBottom: -32,
        backgroundColor: colors.gray[200],

    },
    header:{
padding: 25,
paddingTop: 56
    }
})