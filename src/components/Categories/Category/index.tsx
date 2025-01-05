import { Text, Pressable, PressableProps } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { categoriesIcons } from "@/utils/categories-icons";

import { colors } from "@/styles/theme";
import { styles } from "./styles";


type Props = PressableProps & {
  name: string;
  iconId: string;
  isSelected?: boolean;
}

export function Category({ name, iconId, isSelected = false, ...rest }: Props) {
  const iconData = categoriesIcons[iconId];

  if (!iconData) {
    console.warn(`No icon found for ID: ${iconId}`);
    return null;
  }

  // Renderizar o ícone correto baseado na biblioteca
  const IconComponent =
    iconData.library === "MaterialCommunityIcons"
      ? MaterialCommunityIcons
      : Feather;

  return (
    <Pressable style={[styles.container, isSelected && styles.containerSelected]} {...rest}>
      <IconComponent  name={iconData.name as any} size={16} color={isSelected ? colors.gray100 : colors.gray400} />

      <Text style={[styles.name, isSelected && styles.nameSelected]}>{name}</Text>
    </Pressable>
  )
}