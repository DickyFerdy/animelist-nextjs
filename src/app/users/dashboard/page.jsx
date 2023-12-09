import { authUserSession } from "@/service/auth-service"

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary">
      {user ?
        <h1>Welcome {user?.name}</h1> : <h1>Please Login</h1>
      }
    </div>
  );
};

export default Page;