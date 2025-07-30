import { create } from 'zustand'
interface Cat {
   id: string;
   url: string;
}


type State = {
   favorite: Cat[];
   currentPage: number;
}

type Action = {
    toggleFavorite: (cat: Cat) => void;
    setCurrentPage: (page: number) => void;
   
}


export const useCatStore = create<State & Action>((set) => ({
  favorite:[],
  currentPage: 1,

  toggleFavorite: (cat) => set((store) => {
   if (store.favorite.find((item) => item.id === cat.id)) {
         return {favorite: store.favorite.filter((item) => item.id !== cat.id)}
      } else {
         return { favorite:[...store.favorite, cat]};
      }

  }),
  setCurrentPage: (page) => set({currentPage:page})
}))