import { ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@/components/Button";

import { styles } from "./styles";

type Props = {
  uri: string
}
export function Cover({ uri }: Props) {

  const navigation = useNavigation();

  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button style={{ width: 40, height: 40 }} onPress={() => navigation.goBack()}>
          <Button.Icon library="Feather" name="arrow-left" />
        </Button>
      </View>
    </ImageBackground>
  );
}