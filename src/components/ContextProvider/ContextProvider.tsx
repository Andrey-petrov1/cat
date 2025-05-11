import { createContext, ReactNode, useState } from "react";

interface Cat {
   id: string;
   url: string;
}

interface StoreContextType {
   favorite: Cat[];
   toggleFavorite: (cat: Cat) => void;
}


export const StoreContext = createContext<StoreContextType>({
   favorite: [],
   toggleFavorite: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
   const [favorite, setFavorite] = useState<Cat[]>([]);

   const toggleFavorite = (cat: Cat) => {
      //catsId это передаваемый параметр, но как он понимает что нужно получить cat.id из API
      if (favorite.find((item) => item.id === cat.id)) {
         setFavorite(favorite.filter((item) => item.id !== cat.id));
      } else {
         setFavorite([...favorite, cat]);
      }
   };

   return (
      <StoreContext.Provider value={{ favorite, toggleFavorite }}>
         {children}
      </StoreContext.Provider>
   );
};
