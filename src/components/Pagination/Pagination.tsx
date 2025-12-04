import ReactPaginate from "react-paginate";
export default function Pagination({getPage ,pageCount}: { getPage: (page: number) => void; pageCount: number }) {
  const handlePageClick = (e: { selected: number }) => {
    console.log("Selected page:", e.selected + 1);
    getPage( e.selected + 1)
  };

  return (
    <ReactPaginate
  breakLabel="..."
  nextLabel="التالي >"
  onPageChange={handlePageClick}
  pageRangeDisplayed={window.innerWidth < 640 ? 1 : 2}
  marginPagesDisplayed={1}
  pageCount={pageCount}
  previousLabel="< السابق"
  renderOnZeroPageCount={null}
  containerClassName="flex flex-wrap justify-center items-center gap-2 mt-5"
  pageClassName="rounded overflow-hidden"
  pageLinkClassName="bg-gray-200 text-gray-700 px-2 py-1 sm:px-3 sm:py-1 block hover:bg-gray-300 cursor-pointer"
  previousClassName="rounded overflow-hidden"
  previousLinkClassName="bg-gray-200 text-gray-700 px-2 py-1 sm:px-3 sm:py-1 block hover:bg-gray-300 cursor-pointer"
  nextClassName="rounded overflow-hidden"
  nextLinkClassName="bg-gray-200 text-gray-700 px-2 py-1 sm:px-3 sm:py-1 block hover:bg-gray-300 cursor-pointer"
  breakClassName="rounded overflow-hidden"
  breakLinkClassName="px-2 py-1 sm:px-3 sm:py-1 block"
  activeClassName="bg-red-600"
  activeLinkClassName="bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1"
/>
  );
}