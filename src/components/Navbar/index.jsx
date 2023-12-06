import Link from "next/link";
import InputSearch from "./inputSearch";
import UserActionButton from "./userActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col md:items-center justify-between p-3 gap-2">
        <Link href='/' className="font-bold text-3xl" >ANIMEPEDIA</Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;