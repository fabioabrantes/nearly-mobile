import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 32,
    paddingBottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: colors.gray100,
  },
  containerName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12
  },
  name: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    color: colors.gray600,
  },
  description: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray500,
    marginTop: 12,
    marginBottom: 32,
    lineHeight: 22,
  },
  group: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    paddingBottom: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray500,
    marginBottom: 12,
  },
  rule: {},
  containerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textDescription: {
    color: colors.gray500,
    fontSize: 14,
    fontFamily: fontFamily.regular,
    lineHeight: 22.4,
    flex: 1,
  }
})