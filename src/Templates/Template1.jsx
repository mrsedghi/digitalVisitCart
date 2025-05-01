import { Email, PhoneAndroid } from "@mui/icons-material";
import { useContext } from "react";

import { host } from "../config";
import { DataContext } from "../Context";

export default function Template1() {
  const { data } = useContext(DataContext);

  return (
    <div className="bg-black h-full w-full overflow-y-scroll no-scrollbar m-0">
      <div>
        {data.ProfileVisible ? (
          <img
            src={data.showProfile ? data.showProfile : host + data.profileFile}
            className="gradient-mask-b-30 w-full m-0"
          />
        ) : (
          <div className="h-64 bg-black"></div>
        )}

        <h2 className="text-white mr-2 text-[40pt] relative -top-48  text-right">
          {data.name ? data.name : data.showName}
        </h2>
        <p className="text-white  mr-2 text-[20pt] relative -top-48  text-right">
          {data.title ? data.title : data.showTitle}
        </p>
        <p className="text-white  mr-2 text-[20pt] relative -top-48  text-right">
          {data.company}
        </p>
        {data.logoVisible ? (
          <img
            src={data.showLogo ? data.showLogo : host + data.logoFile}
            className="w-28 relative -top-40 float-right"
          />
        ) : (
          <div></div>
        )}

        <button
          onClick={() => (window.location = "tel:" + data.email)}
          className="relative -top-32 left-5 bg-[#333] w-14 h-14 rounded-[50px] m-2 mt-24"
        >
          <PhoneAndroid sx={{ color: "#fff", fontSize: "25pt" }} />
        </button>
        <button
          className="relative -top-32 left-5 bg-[#333] w-14 h-14 rounded-[50px]  m-2"
          onClick={() => (window.location = "mailto:" + data.email)}
        >
          <Email sx={{ color: "#fff", fontSize: "25pt" }} />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        {data.aboutVisible ? (
          <div className="bg-white  w-[90%] rounded-2xl relative -top-24 text-center">
            <p className="text-[20pt] font-bold">{data.aboutTitle}</p>
            <p className="text-[15pt]  mb-5">{data.des}</p>
          </div>
        ) : (
          <div></div>
        )}
        {data.contactVisible ? (
          <div className="bg-white  w-[90%]  rounded-2xl relative -top-20 mb-20pt">
            <div className="flex items-center justify-start ml-5 mt-5">
              <div className="h-14 w-14 bg-black rounded-[50px] flex justify-center items-center mr-5">
                <PhoneAndroid sx={{ color: "#fff", fontSize: "30pt" }} />
              </div>
              <p className="text-[18pt]">تماس با من</p>
            </div>
            <p className="text-[15pt]  ml-5 mt-10">تلفن من</p>
            <p className="text-[12pt]  ml-5">{data.phone}</p>
            <p className="text-[15pt]  ml-5">ایمیل من</p>
            <p className="text-[12pt]  ml-5">{data.email}</p>
            <p className="text-[15pt]  ml-5">آدرس من</p>
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
