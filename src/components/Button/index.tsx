import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, } from "react-native";
import { MaterialCommunityIcons, Feather, } from "@expo/vector-icons";

import { Loading } from "@/components/Loading";

import { colors } from "@/styles/theme";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
}

function Button({ isLoading = false, children, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <Loading color={colors.gray100} />
      ) : (
        children
      )}
    </TouchableOpacity>

  )
}

function Title({ children }: TextProps) {
  return <Text style={styles.title}>{children}</Text>
}

type FeatherIconProps = {
  library: "Feather";
  name: React.ComponentProps<typeof Feather>["name"];
  size?: number;
  color?: string;
};

type MaterialCommunityIconProps = {
  library: "MaterialCommunityIcons";
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  size?: number;
  color?: string;
};

type IconProps = FeatherIconProps | MaterialCommunityIconProps;

function Icon({ library, name, size = 24, color = colors.gray100 }: IconProps) {
  if (library === "Feather") {
    return <Feather name={name} size={size} color={color} />;
  }
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
}


Button.Title = Title;
Button.Icon = Icon;

export { Button };