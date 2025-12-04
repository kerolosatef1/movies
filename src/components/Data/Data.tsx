import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from "./../MoviesList/MoviesList";
import Navbar from "./../Navbar/Navbar";
export default function Data() {
  const [movies, setMovies]: any = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const getAllMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4245547a1a9a3e8b5cd0e3921f725cfb&language=ar`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };
  const getPage = async (numberPage: number) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4245547a1a9a3e8b5cd0e3921f725cfb&language=ar&page=${numberPage}`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  const search = async (word: string) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4245547a1a9a3e8b5cd0e3921f725cfb&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  };
  useEffect(() => {
    getAllMovies();
  }, []);


  

  return (
    <>
      <Navbar search={search} />
      <MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />
    </>
  );
}
