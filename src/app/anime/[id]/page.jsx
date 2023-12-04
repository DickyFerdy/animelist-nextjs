import getAnimeResponse from "@/service/api-service";
import Image from "next/image";

const Page = async ({ params: { id } }) => {

  const { data } = await getAnimeResponse(`anime/${id}`);
  const scoredByData = data.scored_by.toLocaleString('id-ID').replaceAll('.',',');
  const genres = data.genres.map((genre) => genre.name).join(', ');

  return (
    <>
      <div className="p-5">
        <div className="text-center">
          <h1 className="text-2xl text-color-primary">{data.title}</h1>
        </div>
        <div className="flex flex-col py-4 gap-6">
          <div className="flex justify-center items-center">
            <Image src={data.images.webp.image_url} width={300} height={300} alt={data.images.jpg.image_url} title={data.title}/>
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
              <div className="border-r-2 border-color-secondary px-6">
                <div className="border-b-2 border-color-secondary py-2">
                  <h3 className="text-sm">Title in English:</h3>
                  <p className="font-bold">{data.title_english}</p>
                </div>
                <div className="py-2">
                  <h3 className="text-sm">Title in Japan:</h3>
                  <p className="font-bold">{data.title_japanese}</p>
                </div>
              </div>
              <div className="border-r-2 border-color-secondary px-6">
                <p>Type: {data.type}</p>
                <p>Episode: {data.episodes}</p>
                <p>Duration: {data.duration}</p>
                <p>Status: {data.status}</p>
              </div>
              <div className="border-r-2 border-color-secondary px-6">
                <p>Rating: {data.rating}</p>
                <p>Season: {data.season}</p>
                <p>Year: {data.year}</p>
                <p>Source: {data.source}</p>
              </div>
              <div className="px-6">
                <h3>Genres:</h3>
                <p>{genres}</p>
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
    </>
  );
};

export default Page;