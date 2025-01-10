import { View, Text } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { Coupon } from "@/components/Market/Coupon";

import { categoriesIcons } from "@/utils/categories-icons";

import { colors } from "@/styles/theme";
import { styles } from "./styles";

export type PropsDetailsMarket = {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: number;
  rules: {
    id: string;
    description: string;
  }[];
}

type Props = {
  data: PropsDetailsMarket;
  iconId: string;
}

export function DetailsMarket({ data, iconId }: Props) {
  if (!iconId) return;
  const iconData = categoriesIcons[iconId];

  // Renderizar o ícone correto baseado na biblioteca
  const IconComponent =
    iconData.library === "MaterialCommunityIcons"
      ? MaterialCommunityIcons
      : Feather;

  return (
    <View style={styles.container}>
      <View style={styles.containerName}>
        <Text style={styles.name}>{data.name}</Text>
        <IconComponent name={iconData.name as any} size={24} color={colors.green.light} />
      </View>
      <Text style={styles.description}>{data.description}</Text>

      <Coupon amountCoupons={data.coupons} color={colors.red.base} />

      <View style={styles.group}>
        <Text style={styles.title}>Regulamento</Text>

        <Text style={styles.rule}>
          {`\u2022 ${data.rules[1].description}`}
        </Text>

        <Text style={styles.rule}>
          {`\u2022 ${data.rules[0].description}`}
        </Text>
      </View>

      <View style={styles.group}>
        <Text style={styles.title}>Informações</Text>

        <View style={styles.containerInfo}>
          <Feather name="map-pin" size={16} color={colors.gray400} />
          <Text style={styles.textDescription}>{data.address}</Text>
        </View>

        <View style={styles.containerInfo}>
          <MaterialCommunityIcons
            name="phone"
            size={16}
            color={colors.gray400}
          />
          <Text style={styles.textDescription}>{data.phone}</Text>
        </View>
      </View>

    </View>
  )
}