import { StyleSheet } from "react-native"
import { colors, fontFamily} from "@/src/styles/theme"

export const s = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
    },
    title: {
        color: colors.gray[500],
        fontFamily: fontFamily.medium,
        marginBottom: 12,
        fontSize: 12
    },
    content: {
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.green.soft,
        paddingHorizontal: 8,
        gap: 10
    },
    code: {
        color: colors.gray[600],
        fontFamily: fontFamily.semiBold,
        textTransform: "uppercase",
        fontSize: 16
    }
})