import AddCollectionButton from "@/components/Utilities/addCollectionButton";
import RemoveCollectionButton from "@/components/Utilities/removeCollectionButton";
import { getAnimeResponse } from "@/service/api-service";
import { authUserSession } from "@/service/auth-service";
import prisma from "@/service/prisma";

const Page = async ({ params: { id } }) => {

  const { data } = await getAnimeResponse(`anime/${id}`);
  const scoredByData = data.scored_by?.toLocaleString('id-ID').replaceAll('.',',');
  const genres = data.genres.map((genre) => genre.name).join(', ');
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email,
      anime_mal_id: id
    }
  });

  return (
    <div className="p-5">
      <div>
        { 
          user ? 
            collection ?
              <RemoveCollectionButton anime_mal_id={id} user_email={user?.email}/>
            : <AddCollectionButton anime_mal_id={id} user_email={user?.email} anime_image={data.images.webp.image_url} anime_title={data.title}/>
          : null
        }
      </div>
      <div className="text-center">
        <h1 className="text-2xl text-color-primary">{data.title}</h1>
      </div>
      <div className="flex flex-col py-4 gap-6">
        <div className="flex justify-center items-center">
          <img className="md:h-96 h-80" src={data.images.webp.image_url} alt="..." title={data.title}/>
        </div>
        <div className="text-color-primary flex flex-col gap-2">
          <div className="border border-color-secondary rounded flex md:justify-center items-center py-4 overflow-x-auto">
            <div className="flex justify-center items-center flex-col text-center border-r-2 border-color-secondary px-6">
              <h3 className="bg-color-blue-700 rounded-sm px-2">Score</h3>
              <p className="text-2xl font-bold text-color-red-500">{data.score}</p>
              <p className="text-xs">{scoredByData}</p>
              <h5 className="text-xs">users</h5>
            </div>
            <div className="flex justify-center items-center flex-col text-center border-r-2 border-color-secondary px-6">
              <div className="py-2">
                <h3 className="bg-color-blue-700 rounded-sm px-2 text-sm">Rank</h3>
                <p className="text-xl font-bold text-color-red-500">#{data.rank}</p>
              </div>
              <div className="border-t-2 border-color-secondary py-2">
                <h3 className="bg-color-blue-700 rounded-sm px-2 text-sm">Popularity</h3>
                <p className="text-xl font-bold text-color-red-500">#{data.popularity}</p>
              </div>
            </div>
            <div className="border-r-2 border-color-secondary px-6 md:text-sm text-base">
              <div className="border-b-2 border-color-secondary py-2">
                <h3>Title in English:</h3>
                <p className="font-bold">{data.title_english}</p>
              </div>
              <div className="py-2">
                <h3>Title in Japan:</h3>
                <p className="font-bold">{data.title_japanese}</p>
              </div>
            </div>
            <div className="border-r-2 border-color-secondary px-6 md:text-base text-lg">
              <p>Type: <span className="font-bold">{data.type}</span></p>
              <p>Episode: <span className="font-bold">{data.episodes}</span></p>
              <p>Duration: <span className="font-bold">{data.duration}</span></p>
              <p>Status: <span className="font-bold">{data.status}</span></p>
            </div>
            <div className="border-r-2 border-color-secondary px-6 md:text-base text-lg">
              <p>Rating: <span className="font-bold">{data.rating}</span></p>
              <p>Season: <span className="font-bold">{data.season}</span></p>
              <p>Year: <span className="font-bold">{data.year}</span></p>
              <p>Source: <span className="font-bold">{data.source}</span></p>
            </div>
            <div className="px-6 md:text-base text-lg">
              <h3>Genres:</h3>
              <p className="font-bold">{genres}</p>
            </div>
          </div>
          <div className="border border-color-secondary rounded py-4 px-5">
            <p className="md:text-base text-xl">{data.synopsis}.</p>
          </div>
        </div>
      </div>
      <div className="text-color-primary flex justify-center items-center">
        <iframe className="md:h-64 md:w-96 h-44 w-72" title='Youtube player' src={`https://youtube.com/embed/${data.trailer.youtube_id}?autoplay=0`} allowFullScreen={true}>
        </iframe>
      </div>
    </div>
  );
};

export default Page;