import { useEffect, useState } from "react";
import Pagination from "./shared/ui/pagination.tsx";
import "./App.css";
import CatCard from "./shared/ui/CatCard.tsx";

const headers = new Headers({
   "Content-Type": "application/json",
   "x-api-key":
      "live_tiIvDj23hbegwt66kRYC1MzhXvALN3leNop6lV6DibMhWhKKSiuo4g7cVJ3toJdd",
});

const requestOptions: RequestInit = {
   method: "GET",
   headers: headers,
   redirect: "follow",
};

interface ICat {
   breeds: unknown[];
   height: number;
   id: string;
   url: string;
   width: number;
}

// 1)Перенести компоненты пагинации в shared ui. А так же сделать компонент карточки в которую мы передавать картинка, параметр onClcik на значок сердца ✅
// 2)Удаление карточек убираем ✅
// 3)Переделать пагинацию

function App() {
   const [cats, setCats] = useState<Array<ICat>>([]);
   const [favorite, setFavorite] = useState<string[]>([]);
   const [loading, setLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [catsPerPage] = useState(10);

   const favoritePath = cats.filter((cats) => favorite.includes(cats.id));

   const toggleFavorite = (catsId: string) => {
      //catsId это передаваемый параметр, но как он понимает что нужно получить cat.id из API
      if (favorite.includes(catsId)) {
         setFavorite(favorite.filter((id) => id !== catsId));
      } else {
         setFavorite([...favorite, catsId]);
      }
   };



   useEffect(() => {
      setLoading(true);
      setCats([]);
      fetch(
         `https://api.thecatapi.com/v1/images/search?order=ASC&page=${currentPage - 1}&limit=10`,
         requestOptions
      )
         .then((res) => res.json())

         .then((res) => {
            console.log("result:", res);

            setCats(res);
            setLoading(false);
         })
         .catch((err) => {
            console.log("err", err);
         });
   }, [currentPage]);



   return (
      <div className="container">
         {loading ? (
            <div className="loading-screen">
               <div className="loader"></div>
            </div>
         ) : (
            cats.map((cat) => (
               <CatCard
    key={cat.id}
    imgUrl={cat.url}
    isFavorite={favorite.includes(cat.id)}
    onHeartClick={() => toggleFavorite(cat.id)}
  />
            ))
         )}
         <Pagination
            catsPerPage={catsPerPage}
            totalCats={50}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
         />
         <div className="container">
            {favoritePath.length > 0 ? (
               favoritePath.map((card) => (
                  <div key={card.id} className="cat">
                     <button
                        className="favorite"
                        onClick={() => {
                           toggleFavorite(card.id);
                           console.log("favorite:", favorite);
                        }}
                     >
                        {favorite.includes(card.id) ? (
                           <svg
                              width="40"
                              height="37"
                              viewBox="0 0 40 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z"
                                 fill="#F24E1E"
                              />
                           </svg>
                        ) : (
                           <svg
                              width="40"
                              height="37"
                              viewBox="0 0 40 37"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z"
                                 fill="#F24E1E"
                              />
                           </svg>
                        )}
                     </button>
                     <img src={card.url} className="cat-image" />
                  </div>
               ))
            ) : (
               <p>Пока нет избранных котиков 🐾</p>
            )}
         </div>
      </div>
   );
}

export default App;
