import { createContext } from "react";

export const ItemsData = createContext({
  data: [],
  AddData: () => {},
  DeleteData: () => {},
});
