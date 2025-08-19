"use client";
import calendarIcon from "@/public/calendar.svg";
import searchIcon from "@/public/search-normal.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import citiesData from "@/app/lib/cities";

function Raft() {
  const [openCity, setOpenCity] = useState(false);
  const [cities, setCities] = useState(citiesData);

  useEffect(() => {
    const sortedCities = citiesData.sort((a, b) =>
      a.localeCompare(b, "fa", { sensitivity: "base" })
    );
    setCities(sortedCities);
  }, []);

  const drawerHandler = () => {
    setOpenCity((prev) => !prev);
  };

  // console.log(cities);
  return (
    <div
      // onClick={() => drawerHandler()}
      className="flex items-center justify-between relative cursor-pointer bg-white rounded-lg shadow-[0px_24px_740px_0px_rgba(0,_0,_0,_0.25)] h-[61px] min-w-[215px]  "
    >
      <span className="text-[#838080] text-sm absolute left-[127px] select-none">
        تاریخ رفت
      </span>
      <Image
        src={calendarIcon}
        alt="down icon"
        style={{
          width: "24px",
          height: "24px",
          position: "absolute",
          right: "180px",
          userSelect: "none",
        }}
      />
      <div
        className={`${
          openCity
            ? "absolute bg-white overflow-y-auto max-h-[25vh] rounded-lg shadow-[0px_24px_740px_0px_rgba(0,_0,_0,_0.25)] top-20 w-full"
            : "hidden"
        }`}
      >
        <div className="bg-[#fdfdfd] h-10 overflow-y-auto  rounded-lg flex items-center justify-around px-4 ">
          <div className="flex items-center h-full ">
            <Image
              src={searchIcon}
              alt="down icon"
              style={{
                width: "16px",
                height: "16px",
                right: "180px",
                userSelect: "none",
              }}
              className="text-color1 fill-color1"
            />
          </div>
          <div className="flex h-full flex-1 px-2 ">
            <input
              type="text"
              className="focus:outline-none h-full bg-transparent rounded-lg w-full text-sm text-[#838080]"
            />
          </div>
        </div>
        <div>
          <ul>
            {cities.map((city, i) => (
              <li
                key={i}
                className="py-1 hover:bg-[#e5e5e5] mx-1 px-2 rounded-sm text-black text-xs"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Raft;
