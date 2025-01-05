import { Image, Text, View } from "react-native";

import Logo from '../../assets/logo.png';

import { styles } from "@/components/Welcome/styles";

export function Welcome() {
  return (
    <View>
      <Image source={Logo} style={styles.logo} />

      <Text style={styles.title}>Boas vindas ao Nearby!</Text>

      <Text style={styles.subtitle}>
        Tenha cupons de vantagem para usar em {'\n'}
        seus estabelecimentos favoritos.
      </Text>
    </View>
  );
}