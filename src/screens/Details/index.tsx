import { useEffect, useState, useRef } from "react";
import { View, Alert, Modal, StatusBar, ScrollView, Text } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import { useCameraPermissions, CameraView } from "expo-camera";


import { Button } from "@/components/Button";
import { Loading } from "@/components/Loading";
import { Cover } from "@/components/Market/Cover";
import { Coupon } from "@/components/Market/Coupon";
import { DetailsMarket, PropsDetailsMarket } from "@/components/Market/Details";

import { api } from "@/services/api";

import { styles } from "./styles";

interface ParamsRouter {
  id: string;
  category: string;
}
type DataProps = PropsDetailsMarket & {
  cover: string
}
export function Details() {
  const [data, setData] = useState<DataProps>();
  const [coupon, setCoupon] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [couponIsFetching, setCouponIsFetching] = useState(false);
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false);


  const route = useRoute();
  const { id, category } = route.params as ParamsRouter;


  const navigation = useNavigation();

  const [_, requestPermission] = useCameraPermissions();
  const qrLock = useRef(false);

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission()

      if (!granted) {
        return Alert.alert("Câmera", "Você precisa habilitar o uso da câmera")
      }

      qrLock.current = false;
      setIsVisibleCameraModal(true);
    } catch (error) {
      console.log(error);
      Alert.alert("Câmera", "Não foi possível utilizar a câmera");
    }
  }

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${id}`);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível carregar os dados", [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]);
    }
  }

  async function getCoupon(id: string) {
    try {
      setCouponIsFetching(true);

      const { data } = await api.patch("/coupons/" + id);
      Alert.alert("Cupom", data.coupon);
      setCoupon(data.coupon);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível utilizar o cupom");
    } finally {
      setCouponIsFetching(false);
    }
  }

  function handleUseCoupon(id: string) {
    setIsVisibleCameraModal(false);

    Alert.alert(
      "Cupom",
      "Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?",
      [
        { style: "cancel", text: "Não" },
        { text: "Sim", onPress: () => getCoupon(id) },
      ]
    )
  }

  useEffect(() => {
    fetchMarket();
  }, [id, coupon]);


  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    // Redireciona para a página inicial usando navigation.navigate
    useEffect(() => {
      navigation.navigate("Home"); // Substitua "Home" pelo nome da rota de destino
    }, []);
    // Retorna um feedback visual enquanto redireciona
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Dados não carregados! Redirecionando para a página inicial...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" hidden={isVisibleCameraModal} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={data.cover} />

        <DetailsMarket data={data} iconId={category} />

        {coupon && <Coupon code={coupon} />}
      </ScrollView>

      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamera}>
          <Button.Icon library="MaterialCommunityIcons" name="line-scan" />
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true;
              setTimeout(() => handleUseCoupon(data), 500);
            }
          }}
        />

        <View style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
          <Button
            onPress={() => setIsVisibleCameraModal(false)}
            isLoading={couponIsFetching}
          >
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View>
  )
}