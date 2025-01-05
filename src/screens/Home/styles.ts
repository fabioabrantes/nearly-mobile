import { StyleSheet } from "react-native";

import { fontFamily, colors } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CECECE",
  },
  map: {
    width: '100%',
    height: '100%',
  },
  ContainerCallout: {
    width: 200,
    height: 70,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "flex-start", // Alinhar texto à esquerda
    paddingHorizontal: 8, // Margem interna
    paddingVertical: 4,
  },
  NameCallout: {
    fontSize: 14,
    color: colors.gray600,
    fontFamily: fontFamily.medium,
  },
  AdressCallout: {
    fontSize: 12,
    color: colors.gray600,
    fontFamily: fontFamily.regular,
  }

});