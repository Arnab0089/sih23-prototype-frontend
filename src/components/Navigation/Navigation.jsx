import {
  PiHouse,
  PiCompass,
  PiPlusSquare,
  PiEnvelopeOpen,
  PiUser,
} from 'react-icons/pi';
import Navlink from './Navlink';

// app navigation component for all pages
export default function Navigation() {
  return (
    <nav className="w-full px-4 py-4 pb-2">
      <ul className="flex items-baseline justify-between">
        <li className="">
          <Navlink icon={PiHouse} label="Home" url="/" />
        </li>
        <li className="">
          <Navlink icon={PiCompass} label="Detection" url="/detection" />
        </li>
        <li className="">
          <Navlink icon={PiPlusSquare} label="New" url="/new" />
        </li>
        <li className="">
          <Navlink icon={PiEnvelopeOpen} label="Community" url="/community" />
        </li>
        <li className="">
          <Navlink icon={PiUser} label="Profile" url="/profile" />
        </li>
      </ul>
    </nav>
  );
}
