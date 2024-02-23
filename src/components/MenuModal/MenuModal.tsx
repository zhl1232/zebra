import { Link } from 'react-router-dom'
interface MenuModalProps {
  menuModal: React.RefObject<HTMLDialogElement>;
}
const MenuModal: React.FC<MenuModalProps> = ({ menuModal }) => {
  return (
    <dialog ref={menuModal} autoFocus>
      <div>
        <Link
          className="no-underline text-inherit hover:text-[#ff6347]"
          to="/"
          onClick={() => menuModal.current?.close()}
        >
          <div className="flex leading-10 text-3xl cursor-pointer justify-center">
            Home
          </div>
        </Link>
        <Link
          className="no-underline text-inherit hover:text-[#ff6347]"
          to="/about"
          onClick={() => menuModal.current?.close()}
        >
          <div className="flex leading-10 text-3xl cursor-pointer justify-center">
            About
          </div>
        </Link>
        <Link
          className="no-underline text-inherit hover:text-[#ff6347]"
          to="/aby-store"
          onClick={() => menuModal.current?.close()}
        >
          <div className="flex leading-10 text-3xl cursor-pointer justify-center">
            Aby&rsquo;s Store
          </div>
        </Link>
        <Link
          className="no-underline text-inherit hover:text-[#ff6347]"
          to="/my-favorites"
          onClick={() => menuModal.current?.close()}
        >
          <div className="flex leading-10 text-3xl cursor-pointer justify-center">
            My Favorites
          </div>
        </Link>
        <Link
          className="no-underline text-inherit hover:text-[#ff6347]"
          to="/contact"
          onClick={() => menuModal.current?.close()}
        >
          <div className="flex leading-10 text-3xl cursor-pointer justify-center">
            Contact
          </div>
        </Link>
        <div className="flex leading-10 text-3xl cursor-pointer justify-center">
          <span
            className="close-modal"
            onClick={() => menuModal.current?.close()}
          >
            &#x2715;
          </span>
        </div>
      </div>
    </dialog>
  )
}
export default MenuModal