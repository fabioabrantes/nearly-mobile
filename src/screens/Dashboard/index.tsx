import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Welcome } from "@/components/Welcome";
import { Stages } from "@/components/Stages";
import { Button } from "@/components/Button";


import { styles } from "./styles";

export function Dashboard() {

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Welcome />

      <Stages />

      <Button onPress={handleGoHome}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  )
}