import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Roboto_900Black, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, } from "@expo-google-fonts/roboto";

import { Routes } from '@/routes';
import { Loading } from '@/components/Loading';

import { colors } from '@/styles/theme';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {
          fontsLoaded ? <Routes /> : <Loading size="large" color={colors.green.base} />
        }
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}


