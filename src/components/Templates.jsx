import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import temp1 from "../assets/images/digital-business-cards-template.jpg";
import temp2 from "../assets/images/digital-business-cards-template1.jpg";
import temp3 from "../assets/images/digital-business-cards-template2.jpg";
import temp4 from "../assets/images/digital-business-cards-template3.jpg";
import temp5 from "../assets/images/digital-business-cards-template4.jpg";
import temp6 from "../assets/images/digital-business-cards-template5.jpg";
import { styled } from "@mui/material";
import { Pagination } from "swiper/modules";
import { useContext, useState } from "react";
import { DataContext } from "../Context";
import "swiper/css";
import "swiper/css/pagination";
import MuiToggleButton from "@mui/material/ToggleButton";

export default function Template() {
  const { updateData } = useContext(DataContext);
  const [template, setTemplate] = useState(1);

  const handleChange = (event, newTemplate) => {
    setTemplate(newTemplate);
    updateData({ template: newTemplate });
  };

  const ToggleButton = styled(MuiToggleButton)(() => ({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "rgba(25, 118, 210, 0.3)",
    },
  }));

  return (
    <div>
      <Swiper
        className="w-[400px] sm:w-[600px]"
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
      >
        {" "}
        <SwiperSlide className="w-fit  rounded-2xl ">
          {" "}
          <ToggleButton
            sx={{ borderRadius: "16px" }}
            className="rounded-2xl "
            value={1}
            onClick={handleChange}
            selected={template == 1}
          >
            <img src={temp1} className="rounded-2xl w-full " />
          </ToggleButton>
        </SwiperSlide>
        <SwiperSlide className="w-fit  rounded-2xl">
          {" "}
          <ToggleButton
            sx={{ borderRadius: "16px" }}
            className="rounded-2xl "
            value={2}
            onClick={handleChange}
            selected={template == 2}
          >
            <img src={temp2} className="rounded-2xl w-full" />
          </ToggleButton>
        </SwiperSlide>
        <SwiperSlide className="w-fit  rounded-2xl">
          {" "}
          <ToggleButton
            sx={{ borderRadius: "16px" }}
            className="rounded-2xl "
            value={3}
            onClick={handleChange}
            selected={template == 3}
          >
            <img src={temp3} className="rounded-2xl w-full" />
          </ToggleButton>
        </SwiperSlide>
        <SwiperSlide className="w-fit  rounded-2xl">
          {" "}
          <ToggleButton
            sx={{ borderRadius: "16px" }}
            className="rounded-2xl "
            value={4}
            onClick={handleChange}
            selected={template == 4}
          >
            <img src={temp4} className="rounded-2xl w-full" />
          </ToggleButton>
        </SwiperSlide>
        <SwiperSlide className="w-fit  rounded-2xl">
          {" "}
          <ToggleButton
            sx={{ borderRadius: "16px" }}
            className="rounded-2xl "
            value={5}
            onClick={handleChange}
            selected={template == 5}
          >
            <img src={temp5} className="rounded-2xl w-full" />
          </ToggleButton>
        </SwiperSlide>
        <SwiperSlide className="w-fit  rounded-2xl">
          {" "}
          <ToggleButton
            sx={{ borderRadius: "16px" }}
            className="rounded-2xl "
            value={6}
            onClick={handleChange}
            selected={template == 6}
          >
            <img src={temp6} className="rounded-2xl w-full" />
          </ToggleButton>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
