import { Email, PhoneAndroid } from "@mui/icons-material";
import { useContext } from "react";

import { DataContext } from "../Context";
import { host } from "../config";

export default function Template3() {
  const { data } = useContext(DataContext);
  return (
    <div className="bg-white-[#061244] h-full w-full overflow-y-scroll no-scrollbar m-0">
      <div>
        {data.ProfileVisible ? (
          <img
            src={data.showProfile ? data.showProfile : host + data.profileFile}
            className="gradient-mask-b-30 w-full m-0"
          />
        ) : (
          <div className="h-40 bg-white"></div>
        )}
        <img src="image.svg" className="-mt-32" />
      </div>
      <div className="bg-[#061244] relative -top-2">
        <h2 className="text-white mr-4 text-[30pt] text-right -mt-8 ">
          {data.name ? data.name : data.showName}
        </h2>
        <p className="text-white text-[20pt] text-right mr-4">
          {data.title ? data.title : data.showTitle}
        </p>
        <p className="text-white text-[20pt] relative  text-right mr-4">
          {data.company}
        </p>
        {data.logoVisible ? (
          <img
            src={data.showLogo ? data.showLogo : host + data.logoFile}
            className="w-28 block m-auto mb-10 "
          />
        ) : (
          <div></div>
        )}
        <div className="flex flex-row justify-end m-5">
          <button
            onClick={() => (window.location = "tel:" + data.email)}
            className=" bg-[#FFC11A] w-14 h-14 rounded-[50px] m-2"
          >
            <PhoneAndroid sx={{ color: "#fff", fontSize: "25pt" }} />
          </button>
          <button
            className=" bg-[#FFC11A] w-14 h-14 rounded-[50px]  m-2"
            onClick={() => (window.location = "mailto:" + data.email)}
          >
            <Email sx={{ color: "#fff", fontSize: "25pt" }} />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center ">
          {data.aboutVisible ? (
            <div className="bg-white  w-[90%] rounded-2xl relative  text-center mb-5">
              <p className="text-[20pt] font-bold text-[#FFC11A]">
                {data.aboutTitle}
              </p>
              <p className="text-[15pt]  mb-5">{data.des}</p>
            </div>
          ) : (
            <div></div>
          )}
          {data.contactVisible ? (
            <div className="bg-white  w-[90%]  rounded-2xl relative  mb-20pt">
              <div className="flex items-center justify-start ml-5 mt-5">
                <div className="h-14 w-14 bg-black rounded-[50px] flex justify-center items-center mr-5">
                  <PhoneAndroid sx={{ color: "#fff", fontSize: "30pt" }} />
                </div>
                <p className="text-[18pt] text-[#FFC11A]">تماس با من</p>
              </div>
              <p className="text-[15pt] text-[#FFC11A] ml-5 mt-10">تلفن من</p>
              <p className="text-[12pt]  ml-5">{data.phone}</p>
              <p className="text-[15pt] text-[#FFC11A] ml-5">ایمیل من</p>
              <p className="text-[12pt]  ml-5">{data.email}</p>
              <p className="text-[15pt] text-[#FFC11A] ml-5">آدرس من</p>
              <p className="text-[12pt]  ml-5 mb-5">{data.address}</p>
            </div>
          ) : (
            <div className="h-20"></div>
          )}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
}
