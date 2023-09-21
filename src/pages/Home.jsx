import React, { useState } from "react";
import Layout from "../layouts/Layout";
import { Input } from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";
import Map from "../components/Home/Map";
import Recents from "../components/Home/Recents";
import Chart from "../components/Home/Chart";

export default function Home() {
  const [search, setSearch] = useState("");

  const findplace = (e) => {
    console.log(e.target.value);
    fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json
    ?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry
    &input=mongolian
    &inputtype=textquery
    &locationbias=circle%3A2000%4047.6918452%2C-122.2226413
    &key=YOUR_API_KEY
    `)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <Layout>
      <div className="container mt-4 px-3">
        <div className="">
          <Input
            onChange={findplace}
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
        <div className=" mt-4 ">
          <Chart />
        </div>
      </div>
    </Layout>
  );
}
