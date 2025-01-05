import { MaterialCommunityIcons, Feather, } from "@expo/vector-icons";

// Tipos específicos para cada biblioteca de ícones
type IconLibraries = {
  MaterialCommunityIcons: React.ComponentProps<typeof MaterialCommunityIcons>;
  Feather: React.ComponentProps<typeof Feather>;
};
// Tipos de nome específicos para cada biblioteca
type MaterialCommunityIconsName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];
type FeatherName = React.ComponentProps<typeof Feather>["name"];

// Criando um mapeamento para relacionar ID, biblioteca e ícone
export const categoriesIcons: Record<
  string,
  {
    library: keyof IconLibraries;
    name: MaterialCommunityIconsName | FeatherName;
  }
> = {
  "146b1a88-b3d3-4232-8b8f-c1f006f1e86d": {
    library: "MaterialCommunityIcons",
    name: "silverware-fork-knife",
  },
  "52e81585-f71a-44cd-8bd0-49771e45da44": {
    library: "Feather",
    name: "shopping-bag",
  },
  "57d6e5ff-35f6-4d21-a521-84f23d511d25": {
    library: "MaterialCommunityIcons",
    name: "bed-outline",
  },
  "826910d4-187d-4c15-88f4-382b7e056739": {
    library: "Feather",
    name: "film",
  },
  "abce52cf-b33b-4b3c-8972-eb72c66c83e4": {
    library: "Feather",
    name: "coffee",
  },
};