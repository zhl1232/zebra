import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useOutletContext } from 'react-router-dom'
import type { RootState } from '@/app/store'

type LikeButtonProps = {
  isLiked: boolean;
  item: {
    id: number;
    category: string;
  };
};

export default function LikeButton({
  isLiked,
  item
}: LikeButtonProps) {


  type OutletContextType = {
    handleLike: (id: number, category: string, array: unknown) => void;
    // Add other properties if necessary
  };

  const { handleLike } = useOutletContext() as OutletContextType
  const playing = useSelector((state:RootState) => state.playing.value)
  const handleLikeHeart = (id: number, category: string, array: unknown) => {
    handleLike(id, category, array)
  }

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
  )
}
