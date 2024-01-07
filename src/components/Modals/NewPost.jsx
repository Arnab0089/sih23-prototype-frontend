import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import {
  PiUserFocus,
  PiListBullets,
  PiMapPin,
  PiPaperPlaneRight,
} from 'react-icons/pi';

NewPostModal.propTypes = {
  showNewPostModal: PropTypes.bool.isRequired, //? state for showing new post modal
  setShowNewPostModal: PropTypes.func.isRequired, //? function to set state for showing new post modal
};

export default function NewPostModal({
  showNewPostModal,
  setShowNewPostModal,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (showNewPostModal) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [showNewPostModal]);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNewPostModal(false);
  };

  // close modal when clicked outside
  document.addEventListener('click', (e) => {
    if (e.target === dialogRef.current) {
      setShowNewPostModal(false);
    }
  });

  return (
    <dialog
      ref={dialogRef}
      className="z-40 backdrop:bg-slate-600/30 backdrop:backdrop-blur-s rounded-lg shadow-lg overflow-hidden "
    >
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-foreground-element-2 min-w-[340px] flex flex-col gap-2 p-4 rounded-lg"
      >
        <div className="flex items-center gap-2">
          <img
            src="https://i.pinimg.com/originals/24/ca/51/24ca51edd82d5828340f6a87edbbb529.jpg"
            alt=""
            className="w-[50px] h-[50px] rounded-full"
          />
          <label htmlFor="post-title" className="w-full">
            <input
              type="text"
              className="w-full h-10 px-2 py-4 rounded-lg bg-white text-foreground-element border-2 border-foreground-element focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent "
              name="post-title"
              id="post-title"
              placeholder="Enter title of your post"
            />
          </label>
        </div>
        <div className="w-full">
          <textarea
            className="w-full rounded-lg px-2 py-2  bg-white text-foreground-element border-2 border-foreground-element focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent "
            name="post-content"
            id="post-content"
            rows="6"
            placeholder="Enter content of your post"
          ></textarea>
        </div>
        <div className="w-full -mt-2">
          <ul className="flex items-center justify-between ">
            <li className="">
              <button type="button" className="flex items-center gap-1">
                <PiUserFocus className="w-6 h-6" />
                <span className="text-special-text text-lg ">Gallary</span>
              </button>
            </li>
            <li className="">
              <button type="button" className="flex items-center gap-1">
                <PiListBullets className="w-6 h-6" />
                <span className="text-special-text text-lg ">Poll</span>
              </button>
            </li>
            <li className="">
              <button type="button" className="flex items-center gap-1">
                <PiMapPin className="w-6 h-6" />
                <span className="text-special-text text-lg ">Location</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center mt-2">
          <button
            type="submit"
            className="w-12 h-12 rounded-full flex justify-center items-center bg-foreground-element text-primary-text "
          >
            <PiPaperPlaneRight className="w-8 h-8" />
          </button>
        </div>
      </form>
    </dialog>
  );
}
