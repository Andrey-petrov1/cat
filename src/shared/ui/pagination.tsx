interface PaginationProps {
   catsPerPage: number;
   totalCats: number;
   currentPage: number;
   setCurrentPage: (page: number) => void;
}

const Pagination = ({
   catsPerPage,
   totalCats,
   setCurrentPage,
}: PaginationProps) => {
   //путаница с пропсами
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalCats / catsPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <ul className="pagination">
         {pageNumbers.map((number) => (
            <li className={`page-item`} key={number}>
               <button
                  className="page-link"
                  onClick={() => setCurrentPage(number)}
               >
                  {number}
               </button>
            </li>
         ))}
      </ul>
   );
};

export default Pagination;

