import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

import { styles } from "./styles";
import { colors } from "@/styles/theme";

type loadingProps = ActivityIndicatorProps;
export function Loading({ color, size = "small" }: loadingProps) {
  return (
    <ActivityIndicator
      color={color}
      style={styles.container}
      size={size}
    />
  );
}