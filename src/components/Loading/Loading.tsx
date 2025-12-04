import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="relative w-40 h-40 flex flex-col items-center">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [-20, 0, -20] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className="w-32 h-8 bg-gray-300 border-2 border-white rounded-sm 
          flex justify-between px-2"
          style={{ transformOrigin: "left bottom" }}
        >
          <div className="w-4 h-full bg-black" />
          <div className="w-4 h-full bg-black" />
          <div className="w-4 h-full bg-black" />
        </motion.div>

        <div className="w-32 h-20 bg-gray-700 border-2 border-white mt-1 rounded-sm flex flex-col justify-center items-center">
          <p className="text-white text-sm font-bold tracking-wider">كلاكيت</p>
        </div>

      </div>
    </div>
  );
}
