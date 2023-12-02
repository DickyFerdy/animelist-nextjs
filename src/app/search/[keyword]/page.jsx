import getAnimeResponse from "@/app/service/api-service";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeResponse('anime', `q=${keyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian "${decodedKeyword}"...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;