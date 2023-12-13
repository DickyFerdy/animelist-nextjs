"use client";

import { Bookmark } from "@phosphor-icons/react";

const BookmarkButton = () => {
  return (
    <button className="text-color-accent px-2 py-1">
      <Bookmark size={32} />
    </button>
  );
};

export default BookmarkButton;