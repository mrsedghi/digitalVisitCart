/* eslint-disable no-unused-vars */
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Switch, TextField, ToggleButton, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import * as yup from "yup";
import { useContext, useEffect, useState } from "react";

import { DataContext } from "../Context";
import { host } from "../config";

export default function Profile() {
  const { data, updateData } = useContext(DataContext);

  const validationSchema = yup.object({
    name: yup
      .string()
      .trim() // Remove leading/trailing whitespace
      .required("نام نمی تواند خالی باشد")
      .max(20, "نمی تواند بشتر از 20 کارکتر باشد"),
    title: yup.string().trim(),
    company: yup.string().trim().optional(), // Allow optional company field
    aboutTitle: yup
      .string()
      .trim()
      .max(10, "بیتشر از 10 کاراکتر مجاز نمی باشد"),
    des: yup.string().trim().max(250, "بیتشر از 250 کاراکتر مجاز نمی باشد"),
    phone: yup
      .string()
      .trim()
      .matches(/^\(?([0-9]{11})\)?$/, "ارقام ورودی تلفن درست نمی باشد"),

    email: yup.string().trim().email("ایمیل نامعتبر"),
    address: yup
      .string()
      .trim()
      .optional()
      .max(100, "بیتشر از 100 کاراکتر مجاز نمی باشد"), // Allow optional address field
  });

  const validateState = async (state) => {
    try {
      await validationSchema.validate(state, { abortEarly: false });
      return true; // Validation successful
    } catch (error) {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      throw errors; // Throw detailed validation errors object
    }
  };

  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [company, setCompany] = useState();
  const [aboutTitle, setAboutTitle] = useState();
  const [des, setDes] = useState();
  const [phone, setPhone] = useState();
  const [email, setemail] = useState();
  const [address, setAddress] = useState();

  const [nameError, setNameError] = useState();
  const [titleError, setTitleError] = useState();
  const [companyError, setCompanyError] = useState();
  const [aboutTitleError, setAboutTitleError] = useState();
  const [desError, setDesError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [emailError, setemailError] = useState();
  const [addressError, setAddressError] = useState();

  useEffect(() => {
    (async () => {
      try {
        const isValid = await validateState({
          name,
          title,
          company,
          aboutTitle,
          des,
          phone,
          address,
          email,
        });

        if (isValid) {
          console.log("State is valid!");
        }
      } catch (errors) {
        setNameError(errors.name);
        setTitleError(errors.title);
        setCompanyError(errors.company);
        setAboutTitleError(errors.aboutTitle);
        setDesError(errors.des);
        setPhoneError(errors.phone);
        setemailError(errors.email);
        setAddressError(errors.address);
        console.error("Validation errors:", errors);
      }
    })(name, title, company, aboutTitle, des, phone, address, email);
  }, [name, title, company, aboutTitle, des, phone, address, email]);

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "name") {
      setName(value);
      updateData({ name: value });
    } else if (name === "title") {
      setTitle(value);
      updateData({ title: value });
    } else if (name === "company") {
      setCompany(value);
      updateData({ company: value });
    } else if (name === "aboutTitle") {
      setAboutTitle(value);
      updateData({ aboutTitle: value });
    } else if (name === "des") {
      setDes(value);
      updateData({ des: value });
    } else if (name === "phone") {
      setPhone(value);
      updateData({ phone: value });
    } else if (name === "email") {
      setemail(value);
      updateData({ email: value });
    } else if (name === "address") {
      setAddress(value);
      updateData({ address: value });
    }
  };

  const handleError = () => {};

  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImg, setProfileImg] = useState();
  const [logo, setLogo] = useState();

  const handleChangeImgProfile = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setProfileImg(e.target.result);
      updateData({ showProfile: e.target.result });
      updateData({ profileFile: event.target.files[0] });
    };
    reader.readAsDataURL(file);
  };

  const handleChangeImgLogo = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      setLogo(e.target.result);
      updateData({ showLogo: e.target.result });
      updateData({ logoFile: event.target.files[0] });
    };
    reader.readAsDataURL(file);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <div className="mt-10">
      <Accordion defaultExpanded>
        <AccordionSummary
          dir="rtl"
          sx={{ backgroundColor: "#F1F5F9" }}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>پروفایل </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex flex-col ">
            <div className="flex justify-around ">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row items-center">
                  <Switch
                    onClick={() => {
                      if (data.ProfileVisible == 1) {
                        updateData({ ProfileVisible: 0 });
                      } else if (data.ProfileVisible == 0) {
                        updateData({ ProfileVisible: 1 });
                      }
                    }}
                    defaultChecked
                  />
                  <Typography>عکس پروفایل</Typography>
                </div>
                <div className="flex flex-row items-center">
                  <img
                    src={
                      data.showProfile
                        ? data.showProfile
                        : host + data.profileFile
                    }
                    className="w-16 h-16 my-5 rounded-md mr-3 border-[1px] border-[rgba(0, 0, 0, 0.12)] object-cover"
                  />
                  <ToggleButton
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    className="w-16 h-16"
                  >
                    <CloudUploadIcon />
                    <VisuallyHiddenInput
                      type="file"
                      id="profileFile"
                      name="profileFile"
                      accept="image/*"
                      onChange={handleChangeImgProfile}
                    />
                  </ToggleButton>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row items-center">
                  <Switch
                    onClick={() => {
                      if (data.logoVisible == 1) {
                        updateData({ logoVisible: 0 });
                      } else if (data.logoVisible == 0) {
                        updateData({ logoVisible: 1 });
                      }
                    }}
                    defaultChecked
                  />

                  <Typography>لوگوی برند</Typography>
                </div>
                <div className="flex flex-row items-center">
                  <img
                    src={data.showLogo ? data.showLogo : host + data.logoFile}
                    className="w-16 h-16 my-5 rounded-md mr-3  border-[1px] border-[rgba(0, 0, 0, 0.12)] object-cover"
                  />
                  <ToggleButton
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    className="w-16 h-16"
                  >
                    <CloudUploadIcon />
                    <VisuallyHiddenInput
                      type="file"
                      id="logoFile"
                      name="logoFile"
                      accept="image/*"
                      onChange={handleChangeImgLogo}
                    />
                  </ToggleButton>
                </div>
              </div>
            </div>
            <TextField
              required
              dir="rtl"
              id="outlined-basic"
              label="نام"
              variant="outlined"
              className="!m-5  text-right "
              name="name"
              onChange={handleChange}
              helperText={nameError}
              error={nameError !== undefined}
            />
            <Box className="flex justify-between">
              <TextField
                required
                dir="rtl"
                id="outlined-basic"
                label="عنوان"
                variant="outlined"
                className="!m-5 w-1/2"
                name="title"
                onChange={handleChange}
                helperText={titleError}
                error={titleError !== undefined}
              />

              <TextField
                dir="rtl"
                id="outlined-basic"
                label="شرکت"
                variant="outlined"
                className="!m-5 w-1/2"
                name="company"
                onChange={handleChange}
                helperText={companyError}
                error={companyError !== undefined}
              />
            </Box>

            {/* <Typography className="!ml-5">آیکون اطلاعات تماس</Typography>
            <TextField
              id="outlined-basic"
              label="موبایل"
              variant="outlined"
              className="!m-5 "
            />
            <TextField
              id="outlined-basic"
              label="ایمیل"
              variant="outlined"
              className="!m-5 "
            />
            <TextField
              id="outlined-basic"
              label="اس ام اس"
              variant="outlined"
              className="!m-5 "
            /> */}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "100%" }} defaultExpanded>
        <AccordionSummary
          sx={{ backgroundColor: "#F1F5F9" }}
          expandIcon={<ExpandMoreIcon />}
          dir="rtl"
        >
          <Box className="flex flex-row items-center">
            <Typography>درباره من</Typography>
            <Switch
              defaultChecked
              onClick={() => {
                if (data.aboutVisible == 1) {
                  updateData({ aboutVisible: 0 });
                } else if (data.aboutVisible == 0) {
                  updateData({ aboutVisible: 1 });
                }
              }}
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            dir="rtl"
            id="outlined-basic"
            label="عنوان"
            variant="outlined"
            className="w-full !my-5"
            name="aboutTitle"
            onChange={handleChange}
            helperText={aboutTitleError}
            error={aboutTitleError !== undefined}
          />
          <TextField
            dir="rtl"
            id="outlined-multiline-static"
            label="بیوگرافی"
            multiline
            rows={4}
            className="!my-5 w-full"
            name="des"
            onChange={handleChange}
            helperText={desError}
            error={desError !== undefined}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "100%" }} defaultExpanded>
        <AccordionSummary
          dir="rtl"
          sx={{ backgroundColor: "#F1F5F9" }}
          expandIcon={<ExpandMoreIcon />}
        >
          <Box className="flex flex-row items-center">
            <Typography>اطلاعات تماس</Typography>
            <Switch
              defaultChecked
              onClick={() => {
                if (data.contactVisible == 1) {
                  updateData({ contactVisible: 0 });
                } else if (data.contactVisible == 0) {
                  updateData({ contactVisible: 1 });
                }
              }}
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            dir="rtl"
            id="outlined-basic"
            label="تلفن"
            variant="outlined"
            className="w-full !my-5"
            name="phone"
            onChange={handleChange}
            helperText={phoneError}
            error={phoneError !== undefined}
          />
          <TextField
            dir="rtl"
            id="outlined-basic"
            label="ایمیل"
            variant="outlined"
            className="w-full !my-5"
            name="email"
            onChange={handleChange}
            helperText={emailError}
            error={emailError !== undefined}
          />
          <TextField
            dir="rtl"
            id="outlined-basic"
            label="آدرس"
            variant="outlined"
            className="w-full !my-5"
            name="address"
            onChange={handleChange}
            helperText={addressError}
            error={addressError !== undefined}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
