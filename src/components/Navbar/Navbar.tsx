import  { useState } from "react";

export default function Navbar({ search }: { search: (word: string) => void }) {
  const [word, setWord] = useState("");

  const onSearch = (value: string) => {
    setWord(value);
    search(value);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="ml-5">
            <h1 className="text-2xl text-blue-500 font-bold main-color cursor-pointer">
              كلاكيت
            </h1>
          </div>

          <input
            type="text"
            value={word}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="ابحث عن فيلم..."
            className="px-3 py-1 rounded-l-md outline-none bg-white text-black"
          />
        </div>
      </div>
    </nav>
  );
}
