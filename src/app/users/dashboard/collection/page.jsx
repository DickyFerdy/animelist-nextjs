import Header from "@/components/Dashboard/Header"
import Link from "next/link";

const Page = () => {
  return (
    <section className="p-4">
      <Header title="My Collection"/>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <Link href="" className="relative border-2 border-color-accent">
          <img src="" alt="" width={350} height={350} className="w-full max-h-80 object-cover"/>
          <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="relative border-2 border-color-accent">
          <img src="" alt="" width={350} height={350} className="w-full max-h-80 object-cover"/>
          <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="relative border-2 border-color-accent">
          <img src="" alt="" width={350} height={350} className="w-full max-h-80 object-cover"/>
          <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="relative border-2 border-color-accent">
          <img src="" alt="" width={350} height={350} className="w-full max-h-80 object-cover"/>
          <div className="absolute flex justify-center items-center bottom-0 w-full bg-color-accent h-16">
            <h5 className="text-xl text-center">Judul Anime Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;