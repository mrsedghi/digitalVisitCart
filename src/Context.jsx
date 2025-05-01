import { createContext, useState } from "react";

const DataContext = createContext({
  data: {
    name: "",
    title: "",
    company: "",
    phone: "",
    email: "",
    logo: "",
    aboutTitle: "",
    des: "",
    address: "",
    ProfileImg: "",
    ProfileVisible: true,
    logoVisible: true,
    aboutVisible: true,
    contactVisible: true,
    template: 1,
    logoFile: null,
    profileFile: null,
  },
});

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const updateData = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
