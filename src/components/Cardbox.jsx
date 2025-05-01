import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import Mobileview from "./Mobileview";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Steper from "./Steper";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { host } from "../config";
import { DataContext } from "../Context";

export default function Cardbox() {
  const [editShow, setEditShow] = useState(true);
  const [previewShow, setPreviewShow] = useState(false);
  const { data, updateData } = useContext(DataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${host}/people/0`);

        updateData(response.data);
        updateData({ showProfile: "/profile.webp" });
        updateData({ showLogo: "/logo.webp" });
        updateData({ profileFile: "", logoFile: "" });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        className="bg-slate-100 m-0  md:m-20  rounded-2xl w-full flex-wrap
    px-0 sm:px-10 md:px-10 h-fit flex justify-center sm:flex-nowrap md:flex-nowrap sm:w-fit"
      >
        <Box
          sx={{
            display: editShow
              ? { xs: "flex", md: "flex" }
              : { xs: "none", md: "flex" },
          }}
          className=" my-10 p-5 h-fit rounded-md bg-white "
        >
          <Steper />
        </Box>

        <Box
          sx={{
            overflow: "hidden !important",
            display: previewShow
              ? { xs: "flex", md: "flex" }
              : { xs: "none", md: "flex" },
          }}
          className="bg-white m-0 md:m-5 mt-0 md:mt-10 rounded-2xl h-fit sticky top-0 right-0 bottom-0"
          position="sticky"
        >
          <Mobileview />
        </Box>
      </div>

      <BottomNavigation
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          right: 0,
          margin: 0,
          backgroundColor: "#FFFF",
          zIndex: "9999",
          display: { xs: "flex", md: "none" },
          boxShadow: "-10px 2px 20px rgba(0,0,0,0.5)",
        }}
        showLabels
        className="w-full hidden  "
      >
        <BottomNavigationAction
          label="ویرایش"
          icon={<EditIcon />}
          onClick={() => {
            setEditShow(true);
            setPreviewShow(false);
          }}
        />
        <BottomNavigationAction
          label="نمایش"
          icon={<VisibilityIcon />}
          onClick={() => {
            setEditShow(false);
            setPreviewShow(true);
          }}
        />
      </BottomNavigation>
    </div>
  );
}
