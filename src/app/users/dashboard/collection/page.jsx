import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/service/auth-service";
import prisma from "@/service/prisma";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user.email
    }
  });

  return (
    <section className="p-4">
      <Header title="My Collection"/>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {collection?.map((anime, index) => {
          return (
            <Link href={`/anime/${anime.anime_mal_id}`} key={index} className="relative border-2 border-color-accent">
              <img src={anime.anime_image} alt="" width={350} height={350} className="scalew-full max-h-80 object-cover"/>
              <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
                <h5 className="md:text-xl text-center">{anime.anime_title}</h5>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  );
};

export default Page;