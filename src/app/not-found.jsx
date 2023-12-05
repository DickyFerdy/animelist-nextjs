"use client";

import { House } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="flex justify-center items-center gap-2 flex-col">
        <House size={54} className="text-color-accent"/>
        <h3 className="text-color-primary text-2xl">Not Found</h3>
        <Link href={'/'}>
          <button className="bg-color-accent text-color-dark rounded p-2">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Page;