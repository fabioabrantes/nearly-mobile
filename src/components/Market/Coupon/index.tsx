import { Text, View } from "react-native";
import { MaterialCommunityIcons, } from "@expo/vector-icons";

import { colors } from "@/styles/theme";
import { styles } from "./styles";

type Props = {
  code?: string;
  color?: string;
  amountCoupons?: number;
}
export function Coupon({ code, color = "#3B9B62", amountCoupons = -1 }: Props) {
  const stylesBackGroud = amountCoupons >= 0 && { backgroundColor: colors.red.light, marginBottom: 32, }

  return (
    <View style={[styles.container, stylesBackGroud]}>
      {amountCoupons < 0 && <Text style={styles.title}>Utilize esse cupom</Text>}

      <View style={styles.content}>
        <MaterialCommunityIcons
          name="ticket-confirmation-outline"
          size={24}
          color={color}
        />
        {amountCoupons >= 0 ?
          (<Text style={styles.code}>{`${amountCoupons} cupons disponíveis`}</Text>)
          :
          (<Text style={styles.code}>{code}</Text>)
        }
      </View>
    </View >
  )
}