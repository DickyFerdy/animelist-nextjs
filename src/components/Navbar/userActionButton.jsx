import Link from "next/link";
import { authUserSession } from "@/service/auth-service";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  const dashboard = user ? "Dashboard" : null;

  return (
    <div className="flex md:flex-col justify-between items-center gap-1">
      <Link href='/users/dashboard' title="go to dashboard" className="py-1 font-bold text-xl">{dashboard}</Link>
      <Link href={actionURL} title="sign out" className="bg-color-dark text-color-accent rounded py-1 px-10">{actionLabel}</Link>
    </div>
  );
};

export default UserActionButton;