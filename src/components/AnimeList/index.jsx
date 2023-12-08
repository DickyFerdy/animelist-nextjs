import Link from "next/link";
import CardCarousel from "../Recommend";

export const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
            <img src={anime.images.webp.image_url} alt="..." className="w-full max-h-80 object-cover" />
            <h3 className="font-bold text-center md:text-xl text-md p-4">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export const AnimeListRecom = ({ api }) => {
  return (
    <div className="mx-4 px-3 text-center">
      <CardCarousel card=
        {api.data?.map((anime, index) => {
          return (
            <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
              <img className="w-full max-h-80 object-cover px-3" src={anime.images.webp.image_url} alt="..."/>
              <h3 className="font-bold p-4">{anime.title}</h3>
            </Link>
          );
        })}
      />
    </div>
  )
}
