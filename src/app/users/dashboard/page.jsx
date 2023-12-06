import { authUserSession } from "@/service/auth-service"

const Page = async () => {
  const user = await authUserSession();

  return (
    <>
    <div className="text-color-primary">
      <h1>{user?.name}</h1>
    </div>
    </>
  );
};

export default Page;