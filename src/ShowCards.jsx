import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DataContext } from "./Context";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";
import Template3 from "./Templates/Template3";
import Template4 from "./Templates/Template4";
import Template5 from "./Templates/Template5";
import Template6 from "./Templates/Template6";

import { host } from "./config";

function ShowCards() {
  const { updateData } = useContext(DataContext);
  const { id } = useParams();

  const [template, setTemplate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${host}/people/${id}`);

        updateData(response.data);
        setTemplate(response.data.template);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[414px] flex justify-center items-center">
      {template == 1 ? (
        <Template1 />
      ) : template == 2 ? (
        <Template2 />
      ) : template == 3 ? (
        <Template3 />
      ) : template == 4 ? (
        <Template4 />
      ) : template == 5 ? (
        <Template5 />
      ) : template == 6 ? (
        <Template6 />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ShowCards;
