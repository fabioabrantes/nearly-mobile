import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";


import { Categories, CategoriesProps } from "@/components/Categories";
import { Places } from "@/components/Places";

import pinMarker from '@/assets/pin.png';

import { api } from "@/services/api";

import { styles } from "./styles";

type PlaceProps = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
}

type MarketsProps = PlaceProps & {
  latitude: number
  longitude: number
}

type Coords = {
  latitude: number;
  longitude: number;
}

export function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([] as CategoriesProps);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<MarketsProps[]>([] as MarketsProps[]);
  const [currentLocation, setCurrentLocation] = useState<Coords | null>(null);

  const navigation = useNavigation();

  async function getCurrentLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (granted) {
        const location = await Location.getCurrentPositionAsync();
        /* console.log(location); */
        setCurrentLocation(location.coords);
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias.")
    }
  }

  async function fetchMarkets() {
    try {
      if (!category || category === "") {
        return;
      }

      const { data } = await api.get("/markets/category/" + category);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possível carregar os locais.");
    }
  }

  function handleGoDetails(id: string, category: string) {
    navigation.navigate("Details", { id, category });
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    getCurrentLocation();
    fetchMarkets();
  }, [category]);

  return (
    <View style={styles.container}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />

      {currentLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008
          }}
          showsUserLocation={true}
        >
          {
            markets.length > 0 && markets.map(market => (
              <Marker
                key={market.id}
                identifier={market.id}
                icon={pinMarker}
                coordinate={{
                  latitude: market.latitude,
                  longitude: market.longitude,
                }}
              >
                <Callout onPress={() => handleGoDetails(market.id, category)}>
                  <View style={styles.ContainerCallout}>
                    <Text style={styles.NameCallout}>
                      {market.name}
                    </Text>

                    <Text style={styles.AdressCallout}>
                      {market.address}
                    </Text>
                  </View>
                </Callout>
              </Marker>
            ))
          }
        </MapView>
      )
      }

      {
        markets.length > 0 && <Places data={markets} category={category} />
      }
    </View>
  )
}