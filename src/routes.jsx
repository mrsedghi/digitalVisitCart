import { createBrowserRouter } from "react-router-dom";
import Cardbox from "./components/Cardbox";
import ShowCards from "./ShowCards";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Cardbox />,
  },
  {
    path: "/:id",
    element: <ShowCards />,
  },
]);
