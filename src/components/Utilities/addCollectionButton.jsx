"use client";

import { Bookmarks } from "@phosphor-icons/react";
import { useState } from "react";
import RemoveCollectionButton from "./removeCollectionButton";

const AddCollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handlerCollection = async (event) => {
    event.preventDefault();

    try {
      const data = { anime_mal_id, user_email, anime_image, anime_title };
      const response = await fetch("/api/v1/addCollection", {
        method: "POST",
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to add');
      };

      if (response.status === 200) {
        setIsCreated(true);
      } else {
        const collection = await response.json();

        if (collection.isCreated) {
          setIsCreated(collection.isCreated);
        };
      };
    } catch (e) {
      throw new Error(e.message);
    };
  };

  return (
    <>
      { isCreated ?
          <RemoveCollectionButton anime_mal_id={anime_mal_id} user_email={user_email} anime_image={anime_image} anime_title={anime_title}/> :
          <button onClick={handlerCollection}>
            <Bookmarks size={32} className="text-color-accent"/>
          </button>
      }
    </>
  )
}

export default AddCollectionButton;