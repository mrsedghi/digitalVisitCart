import { Email, PhoneAndroid } from "@mui/icons-material";
import { useContext } from "react";

import { DataContext } from "../Context";
import { host } from "../config";

export default function Template6() {
  const { data } = useContext(DataContext);
  return (
    <div className="bg-white h-full w-full overflow-y-scroll no-scrollbar m-0">
      <div>
        <img src="bg_image_6.png" className="w-full" />
        {data.ProfileVisible ? (
          <img
            src={
              data.showProfile
                ? host + data.showProfile
                : host + data.profileFile
            }
            className="h-28 w-28 rounded-[100px] float-left relative -top-24 ml-5 z-10  shadow-[0_1px_30px_-2px_rgba(0,0,0,0.3)] border-solid border-4 border-orange-100 object-cover"
          />
        ) : (
          <div></div>
        )}
        <img src="image1.svg" className="-mt-36" />
      </div>
      <div className="bg-white relative ">
        <h2 className=" mr-4 text-[30pt] text-right -mt-8 ">
          {data.name ? data.name : data.showName}
        </h2>
        <p className=" text-[20pt] text-right mr-4">
          {data.title ? data.title : data.showTitle}
        </p>
        <p className=" text-[20pt] relative  text-right mr-4">{data.company}</p>
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
            className=" bg-[#904713] w-14 h-14 rounded-[50px] m-2"
          >
            <PhoneAndroid sx={{ color: "#fff", fontSize: "25pt" }} />
          </button>
          <button
            className=" bg-[#904713] w-14 h-14 rounded-[50px]  m-2"
            onClick={() => (window.location = "mailto:" + data.email)}
          >
            <Email sx={{ color: "#fff", fontSize: "25pt" }} />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center ">
          {data.aboutVisible ? (
            <div className="bg-white  w-[90%] rounded-2xl relative  text-center mb-5 shadow-[0_1px_30px_-2px_rgba(0,0,0,0.3)]">
              <p className="text-[20pt] font-bold text-[#904713]">
                {data.aboutTitle}
              </p>
              <p className="text-[15pt]  mb-5">{data.des}</p>
            </div>
          ) : (
            <div></div>
          )}
          {data.contactVisible ? (
            <div className="bg-white  w-[90%]  rounded-2xl relative  mb-20pt shadow-[0_1px_30px_-2px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-start ml-5 mt-5">
                <div className="h-14 w-14 bg-black rounded-[50px] flex justify-center items-center mr-5">
                  <PhoneAndroid sx={{ color: "#fff", fontSize: "30pt" }} />
                </div>
                <p className="text-[18pt] text-[#904713]">تماس با من</p>
              </div>
              <p className="text-[15pt] text-[#904713] ml-5 mt-10">تلفن من</p>
              <p className="text-[12pt]  ml-5">{data.phone}</p>
              <p className="text-[15pt] text-[#904713] ml-5">ایمیل من</p>
              <p className="text-[12pt]  ml-5">{data.email}</p>
              <p className="text-[15pt] text-[#904713] ml-5">آدرس من</p>
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
