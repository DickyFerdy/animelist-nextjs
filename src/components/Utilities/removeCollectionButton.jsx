"use client";

import { Bookmark } from "@phosphor-icons/react";
import { useState } from "react";
import AddCollectionButton from "./addCollectionButton";

const RemoveCollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
  const [isRemove, setIsRemove] = useState(false);

  const handlerCollection = async (event) => {
    event.preventDefault();

    try {
      const data = { anime_mal_id, user_email };
      const response = await fetch("/api/v1/removeCollection", {
        method: "DELETE",
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to delete');
      };
      
      if (response.status === 204) {
        setIsRemove(true);
      } else {
        const collection = await response.json();
        
        if (collection.isRemoved) {
          setIsRemove(response.isRemoved)
        };
      };
    } catch (e) {
      throw new Error(e.message);
    };
  };

  return (
    <>
      { isRemove ?
          <AddCollectionButton anime_mal_id={anime_mal_id} user_email={user_email} anime_image={anime_image} anime_title={anime_title}/> :
          <button onClick={handlerCollection}>
            <Bookmark size={32} className="text-color-accent"/>
          </button>
      }
    </>
  );
};

export default RemoveCollectionButton;