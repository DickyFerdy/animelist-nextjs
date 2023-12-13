"use client";

import { Bookmarks } from "@phosphor-icons/react";
import { useState } from "react";
import BookmarkButton from "../Utilities/Bookmark";

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false)

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title }

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data)
    });

    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(collection.isCreated)
    }
    return
  }

  return (
    <>
      {isCreated ?
        <BookmarkButton /> :
        <button onClick={handleCollection} className="text-color-accent px-2 py-1">
          <Bookmarks size={32} />
        </button>
      }
    </>
  )
}

export default CollectionButton;