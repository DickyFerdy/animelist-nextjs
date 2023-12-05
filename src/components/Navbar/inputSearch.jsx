"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      const keyword = searchRef.current.value;
      
      if (keyword.trim() !== '') {
        event.preventDefault();
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="relative">
      <input placeholder="Search Anime..." className="w-full p-3 rounded border" ref={searchRef} onKeyDown={handleSearch} />
      <button className="absolute top-3 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={26} className="scale-75 text-color-secondary hover:scale-90 hover:text-color-dark"/>
      </button>
    </div>
  );
};

export default InputSearch;