import {
  PiHouse,
  PiCompass,
  PiPlusSquare,
  PiEnvelopeOpen,
  PiUser,
} from 'react-icons/pi';
import PropTypes from 'prop-types';
import Navlink from './Navlink';

Navigation.propTypes = {
  showNewPostModal: PropTypes.bool.isRequired, //? state for showing new post modal
  setShowNewPostModal: PropTypes.func.isRequired, //? function to set state for showing new post modal
};

// app navigation component for all pages
export default function Navigation({ showNewPostModal, setShowNewPostModal }) {
  return (
    <nav className="w-full px-4 pt-3 pb-2">
      <ul className="flex items-baseline justify-between">
        <li className="">
          <Navlink size="3xl" Icon={PiHouse} label="Home" url="/" />
        </li>
        <li className="">
          <Navlink
            size="3xl"
            Icon={PiCompass}
            label="Detection"
            url="/detection"
          />
        </li>
        <li className="">
          <button
            type="button"
            onClick={() => setShowNewPostModal(!showNewPostModal)}
          >
            <Navlink size="3xl" Icon={PiPlusSquare} label="New" url="" />
          </button>
        </li>
        <li className="">
          <Navlink
            size="3xl"
            Icon={PiEnvelopeOpen}
            label="Community"
            url="/community"
          />
        </li>
        <li className="">
          <Navlink size="3xl" Icon={PiUser} label="Profile" url="/profile" />
        </li>
      </ul>
    </nav>
  );
}
