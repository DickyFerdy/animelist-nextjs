import { authUserSession } from "@/service/auth-service"
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary flex flex-col mt-8 justify-center items-center gap-2">
      <h5 className="text-2xl font-bold text-center">Welcome, {user?.name}</h5>
      <img src={user?.image} alt="..." width={250} height={250}/>
      <div className="flex flex-wrap py-8 gap-4">
        <Link href="/users/dashboard/collection" className="bg-color-accent text-color-dark font-bold py-3 px-4">My Collection</Link>
        <Link href="/users/dashboard/comment" className="bg-color-accent text-color-dark font-bold py-3 px-4">My Comment</Link>
      </div>
    </div>
  );
};

export default Page;