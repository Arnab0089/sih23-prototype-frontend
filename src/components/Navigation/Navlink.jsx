import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

Navlink.propTypes = {
  Icon: PropTypes.func.isRequired, //? pi icon component
  label: PropTypes.string.isRequired, //? label for the icon eg. Home, Detection, New, Community, Profile
  url: PropTypes.string.isRequired, //? url for the icon eg. /, /detection, /new, /community, /profile
  size: PropTypes.string, //? size of the icon [not for now]
  badgeCount: PropTypes.number, //? number of notification [not for now]
};

// * navlink component for navigation
// todo: add badgeCount prop to show the number of notification
export default function Navlink({
  Icon,
  label,
  url,
  size = '2xl',
  badgeCount,
}) {
  const location = useLocation().pathname;
  return (
    <NavLink to={url} className={'relative'}>
      <span
        className={`flex flex-col items-center ${
          location === url ? 'text-black' : 'text-gray-500'
        }`}
      >
        {Icon && (
          <Icon
            className={`text-${size} ${
              location === url ? 'scale-110' : 'scale-100'
            }`}
          />
        )}
        <span className="">{label}</span>
      </span>
    </NavLink>
  );
}
