import "../App";
import { useContext } from "react";
import { StoreContext } from "../components/ContextProvider/ContextProvider.tsx";
import CatCard from "./../shared/ui/CatCard.tsx";

function FavoritesPage() {
   const { favorite, toggleFavorite } = useContext(StoreContext);

   return (
    
      <div className="container">
         <h1>Избранные котики</h1>
       
         {favorite.length > 0 ? (
            favorite.map((cat) => (
               <CatCard
                  key={cat.id}
                  imgUrl={cat.url}
                  isFavorite={true}
                  onHeartClick={() => toggleFavorite(cat)}
               />
            ))
         ) : (
            <p>Пока нет избранных котиков 🐾</p>
         )}
        
      </div>
   );
}

export default FavoritesPage;



