import { createContext } from "react";

//1.crear el contexto
export const FilterContext = createContext();

//2.Proveer contexto
export function FilterProviders({ children }) {
  return (
    <FilterContext.Provider value={{ nombre: "Jorgito" }}>
      {children}
    </FilterContext.Provider>
  );
}
