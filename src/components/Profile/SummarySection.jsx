import { React } from "react";
import ProfilePicture from "../../assets/MetaMe_Smiling.png";
import { Progress } from "@material-tailwind/react";

export default function SummarySection() {
    return (
        < div className="w-full p-4 bg-blue-gray-200 rounded-3xl flex justify-evenly items-center shadow-lg" >
            <div className="w-fit">
                <img
                    src={ProfilePicture}
                    alt="Profile"
                    className="rounded-full w-36 h-36 object-cover"
                />
            </div>
            <div className="flex flex-col ms-3 grow items-center">
                <h1 className="text-3xl antialiased mb-1">Jackey</h1>
                <p className="text-xs mb-1">10 / 500xp</p>
                <Progress value={25} label=" " />
            </div>
        </div >
    );
}
