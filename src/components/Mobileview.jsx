import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import { useContext } from "react";
import { DataContext } from "../Context";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";
import Template5 from "../Templates/Template5";
import Template6 from "../Templates/Template6";

export default function Mobileview() {
  const { data } = useContext(DataContext);

  return (
    <DeviceFrameset device="iPhone X" width={375} height={812} zoom={"90%"}>
      {data.template == 1 ? (
        <Template1 />
      ) : data.template == 2 ? (
        <Template2 />
      ) : data.template == 3 ? (
        <Template3 />
      ) : data.template == 4 ? (
        <Template4 />
      ) : data.template == 5 ? (
        <Template5 />
      ) : data.template == 6 ? (
        <Template6 />
      ) : (
        <div></div>
      )}
    </DeviceFrameset>
  );
}
