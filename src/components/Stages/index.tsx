import { View, Text } from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons, } from "@expo/vector-icons";

import { colors } from "@/styles/theme";

import { styles } from "./styles";
import { Stage } from "../Stage";

export function Stages() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>

      <View style={styles.containerStage}>
        <Feather name="map-pin" size={32} color={colors.red.base} />

        <View style={styles.details}>
          <Text style={styles.titleStage}>Encontre estabelecimentos</Text>
          <Text style={styles.description}>Veja locais perto de você que são parceiros Nearby </Text>
        </View>
      </View>

      <View style={styles.containerStage}>
        <Ionicons name="qr-code-outline" size={32} color={colors.red.base} />

        <View style={styles.details}>
          <Text style={styles.titleStage}>Ative o cupom com QR Code</Text>
          <Text style={styles.description}>Escaneie o código no estabelecimento para usar o benefício</Text>
        </View>
      </View>

      <View style={styles.containerStage}>
        <MaterialCommunityIcons name="ticket-confirmation-outline" size={32} color={colors.red.base} />

        <View style={styles.details}>
          <Text style={styles.titleStage}>Garanta vantagens perto de você</Text>
          <Text style={styles.description}>Ative cupons onde estiver, em diferentes tipos de estabelecimento </Text>
        </View>
      </View>
    </View>
  )
}