import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function MovieDetails() {
  const { id, name } = useParams();
  const [movie, setMovie]: any = useState(null);

  const getMovieDetails = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4245547a1a9a3e8b5cd0e3921f725cfb&language=ar`
      );
      setMovie(res.data);
    } catch (error) {
      console.log("خطأ في  بيانات الفيلم:", error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-5">
      {movie ? (
        <>
          <div className="text-white almarai-bold p-5 text-center">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="w-[300px] rounded-lg shadow-lg"
              alt={movie.original_title}
            />

            <div className="space-y-4">
              <p className="text-gray-300 text-lg">
                <span className="font-bold text-white">اللغة الأصلية: </span>
                {movie.original_language}
              </p>

              <p className="text-gray-300 text-lg">
                <span className="font-bold text-white">اسم الفيلم الأصلي : </span>
                {movie.original_title}
              </p>

              <p className="text-gray-300 text-lg">{movie.title}</p>

              <p className="text-gray-300">
                <span className="font-bold text-white">التقييم: </span>
                {movie.vote_average}
              </p>

              <p className="text-white text-sm mb-1">
                المشاهدات : {movie.popularity}
              </p>

              <p className="text-gray-300">
                <span className="font-bold text-white">الوصف : </span>
                {movie.overview && movie.overview.trim() !== "" ? (
                  movie.overview
                ) : (
                  <span className="text-red-500">
                    عذراً، لا يوجد وصف متاح لهذا الفيلم حالياً.
                  </span>
                )}
              </p>

              <p className="text-gray-300">
                <span className="font-bold text-white">سنة الإصدار : </span>
                {movie.release_date}
              </p>

              <h4 className="text-white text-sm mb-1">
                النوع : {movie.genres && movie.genres.length > 0
                  ? movie.genres.map((g: any) => g.name).join(", ")
                  : "غير محدد"}
              </h4>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
