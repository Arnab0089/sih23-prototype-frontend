import React from "react";
import Layout from "../layouts/Layout";
import { Input } from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";
import Map from "../components/Home/Map";
import Recents from "../components/Home/Recents";

export default function Home() {
  return (
    <Layout>
      <div className="container mt-4 px-3">
        <div className="">
          <Input
            type="text"
            label="Search"
            icon={<BsSearch />}
            size="regular"
            outline={false}
          />
        </div>
        <div className=" mt-4 h-[300px]">
          <Map />
        </div>
        <div className=" mt-4 ">
          <Recents />
        </div>
      </div>
    </Layout>
  );
}
