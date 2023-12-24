// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-solid-svg-icons';

// // app header component for all pages
// export default function Header({ headerText }) {
//   return (
//     <header className="w-full flex items-center justify-between px-3 py-4 bg-[#e6efff]">
//       <h3 className="text-2xl font-medium text-[#A13131]">{headerText}</h3>
//       <button className="">
//         <FontAwesomeIcon className="text-2xl" icon={faBell} />
//       </button>
//     </header>
//   );
// }

import React from 'react';
import { PiBellDuotone } from 'react-icons/pi';
import PropTypes from 'prop-types';

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

// app header component for all pages
export default function Header({ headerText }) {
  return (
    <header className="flex w-full h-[60px] items-center justify-between px-[15px] py-[10px] relative bg-foreground-element">
      <div className="relative w-fit [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-special-text text-[24px] tracking-[0] leading-[27px] whitespace-nowrap">
        {headerText}
      </div>
      <PiBellDuotone className="w-8 h-8" />
    </header>
  );
}
