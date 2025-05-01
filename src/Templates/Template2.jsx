import { Email, PhoneAndroid } from "@mui/icons-material";
import { useContext } from "react";

import { DataContext } from "../Context";
import { Typography } from "@mui/material";
import { host } from "../config";
export default function Template2() {
  const { data } = useContext(DataContext);
  return (
    <div className="bg-slate-300 h-full w-full overflow-y-scroll no-scrollbar m-0">
      {data.logoVisible ? (
        <div className="flex justify-center items-center">
          <img
            src={data.showLogo ? data.showLogo : host + data.logoFile}
            className="w-28 mb-2 mr-2 mt-16 float-right "
          />
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex flex-col justify-center items-center mt-36">
        <div className="  bg-[#1E0E52]  w-[90%] rounded-2xl relative -top-24 text-center mb-5">
          <div>
            {data.ProfileVisible ? (
              <img
                src={
                  data.showProfile ? data.showProfile : host + data.profileFile
                }
                className="h-full w-40 float-left rounded-s-2xl "
              />
            ) : (
              <div></div>
            )}
          </div>
          <div className="pr-4">
            <Typography
              sx={{ fontSize: "22pt" }}
              className="mt-1 mr-2  text-right text-wrap text-white"
            >
              {data.name ? data.name : data.showName}
            </Typography>
            <h2 className="mt-1 mr-2 text-[16pt] text-right text-white">
              {data.title ? data.title : data.showTitle}
            </h2>
            <h2 className="mt-1 mr-2  text-[14pt] text-right text-white">
              {data.company}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#FF5B12]  w-[90%] rounded-2xl relative -top-24 text-center mb-5">
          <button
            onClick={() => (window.location = "tel:" + data.email)}
            className="relative  bg-white w-14 h-14 rounded-[50px] m-2"
          >
            <PhoneAndroid sx={{ color: "#FF5B12", fontSize: "25pt" }} />
          </button>
          <button
            className="relative  bg-white w-14 h-14 rounded-[50px]  m-2"
            onClick={() => (window.location = "mailto:" + data.email)}
          >
            <Email sx={{ color: "#FF5B12", fontSize: "25pt" }} />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        {data.aboutVisible ? (
          <div className="bg-white  w-[90%] rounded-2xl relative -top-24 text-center">
            <p className="text-[20pt] text-[#FF5B12] font-bold">
              {data.aboutTitle}
            </p>
            <p className="text-[15pt]  mb-5">{data.des}</p>
          </div>
        ) : (
          <div></div>
        )}
        {data.contactVisible ? (
          <div className="bg-white  w-[90%]  rounded-2xl relative -top-20 mb-20pt">
            <div className="flex items-center justify-start ml-5 mt-5">
              <div className="h-14 w-14 bg-[#FF5B12] rounded-[50px] flex justify-center items-center mr-5">
                <PhoneAndroid sx={{ color: "#fff", fontSize: "30pt" }} />
              </div>
              <p className="text-[18pt] text-[#FF5B12]">تماس با من</p>
            </div>
            <p className="text-[15pt] text-[#FF5B12]  ml-5 mt-10">تلفن من</p>
            <p className="text-[12pt]  ml-5">{data.phone}</p>
            <p className="text-[15pt] text-[#FF5B12]  ml-5">ایمیل من</p>
            <p className="text-[12pt]  ml-5">{data.email}</p>
            <p className="text-[15pt] text-[#FF5B12]  ml-5">آدرس من</p>
            <p className="text-[12pt]  ml-5 mb-5">{data.address}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="h-20"></div>
    </div>
  );
}
