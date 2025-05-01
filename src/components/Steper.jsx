import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import axios from "axios";
import StepOne from "./StepOne";
import { useContext, useState } from "react";
import { DataContext } from "../Context";
import QRCode from "qrcode";
import { frontHost, host } from "../config";
import { IoMdDownload } from "react-icons/io";
import { Alert, Snackbar } from "@mui/material";
import { Update } from "@mui/icons-material";

const steps = ["محتوا", "QRCode"];

export default function Steper() {
  const [activeStep, setActiveStep] = useState(0);
  const { data, updateData } = useContext(DataContext);

  const [qrImg, setQrImg] = useState("");

  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleNext = () => {
    if (activeStep == 2) {
      location.reload();
    } else {
      setActiveStep(2);
    }
  };

  const sendData = async () => {
    try {
      const response = await axios.post(`${host}/people`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      generateQR(`${frontHost}/` + response.data.id);
      handleNext();
      console.log("success");
    } catch (error) {
      console.log("Error");
      console.log(error.response.data.message);
      setError(" " + error.response.data.message + " ");
      handleClick();
      console.log(data);
    }
  };
  const generateQR = async (text) => {
    try {
      setQrImg(await QRCode.toDataURL(text));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="error" variant="filled">
          {error}
        </Alert>
      </Snackbar>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 ? (
        <div>
          <StepOne />
        </div>
      ) : (
        <div></div>
      )}
      {activeStep === 2 ? (
        <div className="flex flex-col justify-center">
          <div>
            <img src={qrImg} className="w-60" />
          </div>
          <div>
            <a href={qrImg} target="_blank" download className="w-[100%] ">
              <Button
                variant="contained"
                endIcon={<IoMdDownload />}
                className="w-full"
              >
                دانلود
              </Button>
            </a>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Box sx={{ flex: "1 1 auto" }} />

          <Button
            id="submit"
            variant="contained"
            onClick={() => {
              sendData();
            }}
          >
            {activeStep === 2 ? "ساخت کارت جدید" : "بعدی"}
          </Button>
        </Box>
      </div>
    </Box>
  );
}
