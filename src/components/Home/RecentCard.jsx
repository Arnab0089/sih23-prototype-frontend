import React from "react";
import { Alert, Typography, Card } from "@material-tailwind/react";
import { AiFillInfoCircle } from "react-icons/ai";

export default function RecentCard({ heading, subHeading, image }) {
  return (
    <div className=" w-full ">
      <Card>
        <div className="flex flex-col p-3">
          <Typography className="text-black" variant="h5">
            {heading || "Heading"}
          </Typography>
          <Typography className="" variant="p">
            {subHeading || "Subheading"}
          </Typography>
        </div>
      </Card>
    </div>
  );
}
