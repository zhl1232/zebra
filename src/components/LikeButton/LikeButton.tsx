import React from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export default function LikeButton({
  isLiked,
  item
}) {
  const { handleLike } = useOutletContext();
  const playing = useSelector((state) => state.playing.value);
  const handleLikeHeart = (id, category, array) => {
    handleLike(id, category, array);
  };

  return playing ? (
    isLiked ? (
      <div
        className="text-3xl cursor-pointer text-[#ff6347] hover:text-[#ff9380]" 
        onClick={() => handleLikeHeart(item.id, item.category, item)}
      >
        <FontAwesomeIcon icon={faHeart} />
      </div>
    ) : (
      <div
        className="text-3xl cursor-pointer text-[#2f4f4f] hover:text-[#4d8080]"
        onClick={() => handleLikeHeart(item.id, item.category, item)}
      >
        <FontAwesomeIcon icon={faHeart} />
      </div>
    )
  ) : (
    <div className="text-3xl cursor-not-allowed text-[#8fbcbc]">
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
}
