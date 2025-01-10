import { FlatList, } from "react-native";

import { Category } from "@/components/Categories/Category";

import { styles } from "./styles";

type Category = {
  id: string;
  name: string;
};

export type CategoriesProps = Category[];

type Props = {
  data: CategoriesProps;
  selected: string;
  onSelect: (id: string) => void;
}

export function Categories({ data, selected, onSelect }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          isSelected={selected === item.id}
          onPress={() => onSelect(item.id)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      style={styles.container}
    />
  )

}