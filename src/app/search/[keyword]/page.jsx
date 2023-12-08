"use client";

import { getAnimeResponse } from "@/service/api-service";
import { AnimeList } from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { useEffect, useState } from "react";
import Pagination from "@/components/Utilities/Pagination";
import ToTop from "@/components/Utilities/ToTop";

const Page = ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  
  const [page, setPage] = useState(1);
  const [searchAnime, setSearchAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => { 
    const data = await getAnimeResponse('anime', `q=${keyword}&page=${page}`);
    setSearchAnime(data);
    setLoading(true);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <section>
        {loading ?
          <div>
            <Header title={`Result "${decodedKeyword}"...`} />
            <AnimeList api={searchAnime} />
            <Pagination page={page} lastPage={searchAnime.pagination?.last_visible_page} setPage={setPage}/>
            <ToTop />
          </div> : null
        }
      </section>
    </>
  );
};

export default Page;