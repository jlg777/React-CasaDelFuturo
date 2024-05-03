import { useContext } from "react";
import { FilterContext } from "../providers/filterProviders";

//3.Consumir contexto
export const useFilterProviders = () => useContext(FilterContext);
