import Link from "next/link";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col md:items-center justify-between p-5 gap-2">
        <Link href='/' className="font-bold text-3xl" >ANIMELIST</Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;