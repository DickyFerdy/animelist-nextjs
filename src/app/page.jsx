"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../service/api-service";
import { useEffect, useState } from "react";
import ToTop from "@/components/Utilities/ToTop";

const Page = () => {

  const [topAnime, setTopAnime] = useState([]);
  const [RecomAnime, setRecomAnime] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const dataTopAnime = await getAnimeResponse('top/anime', `limit=10`);
    const dataRecommendedAnime = await getNestedAnimeResponse('recommendations/anime', 'entry');
    const recommendedAnime = reproduce(dataRecommendedAnime, 5);
    setTopAnime(dataTopAnime);
    setRecomAnime(recommendedAnime);
    setLoading(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section>
        <Header title="Most Popular" linkHref="/popular" linkTitle="View All" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommendation" />
        <AnimeList api={RecomAnime} />
      </section>
      {loading ? <ToTop /> : null}
    </>   
  );
};

export default Page;
