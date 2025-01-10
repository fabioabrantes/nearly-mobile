import { useRef } from 'react';
import { Text, useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useNavigation } from '@react-navigation/native';

import { Place, PlaceProps } from "@/components/Place";

import { styles } from "./styles";

type Props = {
  data: PlaceProps[];
  category:string;
}
export function Places({ data,category }: Props) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const dimensions = useWindowDimensions();

  const navigation = useNavigation();

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };

  function handleDetails(id: string) {
    navigation.navigate("Details", { id,category });
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      backgroundStyle={styles.container}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Place
            data={item}
            onPress={() => { handleDetails(item.id) }}
          />
        )}
        contentContainerStyle={styles.content}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  )
}