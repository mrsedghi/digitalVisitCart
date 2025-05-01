import { Email, PhoneAndroid } from "@mui/icons-material";
import { useContext } from "react";

import { DataContext } from "../Context";
import { host } from "../config";

export default function Template4() {
  const { data } = useContext(DataContext);
  return (
    <div className="bg-[url('bg_image_4.jpg')] h-full w-full overflow-y-scroll no-scrollbar m-0">
      {data.ProfileVisible ? (
        <img
          src={data.showProfile ? data.showProfile : host + data.profileFile}
          className="h-40 w-40 rounded-[100px] m-10 my-20 object-cover"
        />
      ) : (
        <div className="h-40 "></div>
      )}

      <div className=" relative -top-2">
        <h2 className=" mr-4 text-[30pt] text-right -mt-8 ">
          {data.name ? data.name : data.showName}
        </h2>
        <div className="flex flex-col justify-center items-end">
          <div className="w-32 h-2 bg-black mt-2"></div>
        </div>
        <p className=" text-[20pt] text-right mr-4 mt-2">
          {data.title ? data.title : data.showTitle}
        </p>
        <p className=" text-[20pt] relative  text-right mr-4">{data.company}</p>
        {data.logoVisible ? (
          <div className="flex flex-row justify-end m-5">
            <img
              src={data.showLogo ? data.showLogo : host + data.logoFile}
              className="w-28  mb-10 "
            />
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex flex-row justify-end m-5">
          <button
            onClick={() => (window.location = "tel:" + data.email)}
            className=" bg-white w-14 h-14 rounded-[50px] m-2"
          >
            <PhoneAndroid sx={{ color: "#000", fontSize: "25pt" }} />
          </button>
          <button
            className=" bg-white w-14 h-14 rounded-[50px]  m-2"
            onClick={() => (window.location = "mailto:" + data.email)}
          >
            <Email sx={{ color: "#000", fontSize: "25pt" }} />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center ">
          {data.aboutVisible ? (
            <div className="bg-white  w-[90%] rounded-2xl relative  text-center mb-5">
              <p className="text-[20pt] font-bold ">{data.aboutTitle}</p>
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
                <p className="text-[18pt] ">تماس با من</p>
              </div>
              <p className="text-[15pt]  ml-5 mt-10">تلفن من</p>
              <p className="text-[12pt]  ml-5">{data.phone}</p>
              <p className="text-[15pt]  ml-5">ایمیل من</p>
              <p className="text-[12pt]  ml-5">{data.email}</p>
              <p className="text-[15pt]  ml-5">آدرس من</p>
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
