// import Layout from '../layouts/Layout';
// import Header from '../components/Header/Header.jsx';

// // community page component
// export default function Community() {
//   return (
//     <Layout>
//       <Header headerText="Community" />
//       <h1>Community</h1>
//       {/* Write your code here */}
//     </Layout>
//   );
// }

import React from "react";
import { Bell } from "./Bell";
import { BottomNav } from "./BottomNav";
import { EnvelopeOpen } from "./EnvelopeOpen";
import { Header } from "./Header";
import { Post } from "./Post";

export const Community = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[390px] h-[844px] relative">
        <div className="flex flex-col w-[390px] h-[724px] items-center gap-[10px] p-[10px] absolute top-[60px] left-0 bg-white overflow-y-scroll">
          <Post className="!flex-[0_0_auto]" />
          <Post className="!flex-[0_0_auto]" />
          <Post className="!flex-[0_0_auto]" />
          <Post className="!flex-[0_0_auto]" />
        </div>
        <BottomNav
          className="!absolute !left-0 !top-[784px]"
          icon={<EnvelopeOpen className="!relative !w-[32px] !h-[32px]" />}
        />
        <Header
          className="!absolute !left-0 !top-0"
          icon={<Bell className="!relative !w-[32px] !h-[32px]" />}
          text="Commu"
        />
      </div>
    </div>
  );
};
