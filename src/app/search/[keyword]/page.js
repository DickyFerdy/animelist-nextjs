import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async ({params}) => {

  const { keyword } = params;
  const result = keyword.replace('%20', ' ');

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header title={`Pencarian Untuk "${result}"...`} />
        <AnimeList api={searchAnime}/>
      </section>
    </>
  );
};

export default Page;