import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray100,
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: colors.gray300,
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100,
  },
  title: {
    color: colors.gray600,
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginBottom: 16,
  },
});