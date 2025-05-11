import { useContext, useState } from "react";
import Pagination from "./../shared/ui/pagination.tsx";
import CatCard from "./../shared/ui/CatCard.tsx";
import { StoreContext } from "../components/ContextProvider/ContextProvider.tsx";
import { useQuery } from '@tanstack/react-query';

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

export const MainPage = () => {
   // const [cats, setCats] = useState<Array<ICat>>([]);
   // const [loading, setLoading] = useState(true);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [catsPerPage] = useState(10);

   const { favorite, toggleFavorite } = useContext(StoreContext);

const fetchCats = async (): Promise<ICat[]> => {
   const res = await fetch (`https://api.thecatapi.com/v1/images/search?order=ASC&page=${currentPage - 1}&limit=10`, requestOptions);
   if (!res.ok) {
      throw new Error("Ошибка при загрузке котов");
   }
   return res.json();
}


const {
   data: cats = [],
   isLoading,
   isError,
   error,
 } = useQuery({
   queryKey: ['cats', currentPage],
   queryFn: () => fetchCats(),
   // keepPreviousData : true
 }); // по какой-то причине некоторые из страниц грузятся долго
 






   // useEffect(() => {
   //    setLoading(true);
   //    setCats([]);
   //    fetch(
   //       `https://api.thecatapi.com/v1/images/search?order=ASC&page=${
   //          currentPage - 1
   //       }&limit=10`,
   //       requestOptions
   //    )
   //       .then((res) => res.json())

   //       .then((res) => {
   //          console.log("result:", res);

   //          setCats(res);
   //          setLoading(false);
   //       })
   //       .catch((err) => {
   //          console.log("err", err);
   //       })
   //       .finally(() => {
   //          setLoading(false);
   //       });
   // }, [currentPage]);

   return (
      <div className="container">
         {isLoading ? (
            <div className="loading-screen">
               <div className="loader"></div>
            </div>
     ) : isError && error instanceof Error ? (
      <div className="error">Ошибка: {error.message}</div>
    ) : ( // что означает то что выше???
            cats.map((cat) => (
               <CatCard
                  key={cat.id}
                  imgUrl={cat.url}
                  isFavorite={!!favorite.find((item) => item.id === cat.id)}
                  onHeartClick={() => toggleFavorite(cat)}
               />
            ))
         )}
         <Pagination
            catsPerPage={catsPerPage}
            totalCats={50}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
         />
         
      </div>
   );
};
