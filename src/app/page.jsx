"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import getAnimeResponse from "./service/api-service";
import { useEffect, useState } from "react";
import ToTop from "@/components/Utilities/ToTop";

const Page = () => {

  const [topAnime, setTopAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => { 
    const data = await getAnimeResponse('top/anime', `limit=10`);
    setTopAnime(data);
    setLoading(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
        {loading && 
          <ToTop />
        }
      </section>
    </>   
  );
};

export default Page;
