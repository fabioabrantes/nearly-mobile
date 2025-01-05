import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray500,
  },
  containerStage: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
  details: {
    flex: 1,
  },
  titleStage: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray600,
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray500,
    marginTop: 4,
  },
});