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

import React from "react";
import { PiBellDuotone } from "react-icons/pi";

export const Header = () => {
  return (
    <div className="flex w-[390px] h-[60px] items-center justify-between px-[15px] py-[10px] relative bg-foreground-element">
      <div className="relative w-fit [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-special-text text-[24px] tracking-[0] leading-[27px] whitespace-nowrap">
        Title
      </div>
      <PiBellDuotone />
    </div>
  );
};

