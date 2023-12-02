import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import getAnimeResponse from "./service/api-service";

const Page = async () => {

  const topAnime = await getAnimeResponse('top/anime', 'limit=10');

  return (
    <>
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>
    </>   
  );
};

export default Page;
