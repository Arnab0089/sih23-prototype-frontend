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
          <Navlink size="3xl" Icon={PiPlusSquare} label="New" url="/new" />
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
