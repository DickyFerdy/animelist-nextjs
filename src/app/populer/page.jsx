"use client";

import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../service/api-service";
import ToTop from "@/components/Utilities/ToTop";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => { 
    const data = await getAnimeResponse('top/anime', `page=${page}`);
    setTopAnime(data);
    setLoading(true);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      {loading ? <HeaderMenu title={`Most Popular Anime #${page}`}/> : null}
      <AnimeList api={topAnime} />
      {loading ? <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage}/> : null}
      {loading? <ToTop /> : null}
    </>
  );
};

export default Page;
