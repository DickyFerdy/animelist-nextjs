"use client";

import { House } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault()
    router.back()
  }

  return (
    <div className="flex justify-center items-center h-96">
      <div className="flex justify-center items-center gap-2 flex-col">
        <House size={54} className="text-color-accent"/>
        <h3 className="text-color-primary text-2xl">Not Found</h3>
        <button onClick={handleBack} className="bg-color-accent text-color-dark rounded py-2 px-5 font-bold text-lg">Back</button>
      </div>
    </div>
  );
};

export default Page;