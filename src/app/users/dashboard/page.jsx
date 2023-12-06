import { authUserSession } from "@/service/auth-service"
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <>
      <div className="text-color-primary">
        
        {user ? <h1>{user?.name}</h1> : 
          <div className="flex justify-center items-center h-96">
            <div className="flex justify-center items-center gap-2 flex-col">
              <h1 className="text-color-primary text-2xl">Please sign in to view the dashboard</h1>
              <Link href={'/'}>
                <button className="bg-color-accent text-color-dark rounded p-2">Home</button>
              </Link>
            </div>
          </div>}
      </div>
    </>
  );
};

export default Page;