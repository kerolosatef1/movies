import CardMovies from './../CardMovies/CardMovies';
import Pagination from "../Pagination/Pagination";
export default function MoviesList({ movies , getPage , pageCount }: { movies: any[], getPage: (page: number) => void, pageCount: number }) {
  return <>
    <div className="m-5 ">
      {movies.length >= 1 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {movies.map((mov: any) => (
            <CardMovies key={mov.id} mov={mov} />
          ))}
        </div>
      ) : (
        <h3>لا يوجد افلام</h3>
      )}
      <Pagination getPage={getPage} pageCount={pageCount}/>
    </div>
  </>
}