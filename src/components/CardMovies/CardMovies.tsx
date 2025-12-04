import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function CardMovies({ mov }: { mov: any }) {
    

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="w-full "
    >
      <Link
        to={`/movie/${mov.id}/${encodeURIComponent(mov.original_title)}`}
        className="relative w-full h-[500px] rounded-xl overflow-hidden cursor-pointer group shadow-lg"
      >
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden cursor-pointer group shadow-lg">

        
          <motion.img
            src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
            alt={mov.original_title}
            className="w-full h-full object-cover group-hover:scale-110 duration-500"
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.5 }}
          />

         
          <div
            className="
              absolute inset-0 
              bg-blue-500/20 
              opacity-0 
              group-hover:opacity-100 
              duration-500
            "
          ></div>

        
          <motion.div
            className="
              absolute inset-0 
              from-black via-black/70 to-transparent
              opacity-0 group-hover:opacity-100 
              translate-y-5 group-hover:translate-y-0
              duration-500 flex flex-col justify-center p-4
            "
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <h1 className="text-white text-lg font-semibold mb-1">
              اسم الفيلم الأصلي : {mov.original_title}
            </h1>
            <h2 className="text-white text-lg font-semibold mb-1">
              {mov.title}
            </h2>
            <h4 className="text-white text-lg font-semibold mb-1">
              اللغة : {mov.original_language}
            </h4>
            
            <p className="text-white text-sm mb-1">
              التقييم : {mov.vote_average}
            </p>

            
            <p className="text-white text-xs">سنة: {mov.release_date}</p>

           

          </motion.div>
         
        </div>
      </Link>
    </motion.div>
  );
}
