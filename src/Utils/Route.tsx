import Home from "../Pages/Home";
import Couple from "../Pages/Couple";
import { GiLovers } from "react-icons/gi";
import { CgMail } from "react-icons/cg";
import { FaMessage } from "react-icons/fa6";
import { TbMapShare } from "react-icons/tb";
import Place from "../Pages/Location";
import Closing from "../Pages/Closing";
import Rsvp from "../Pages/Rsvp";

const routes = [
  {
    path: "/",
    element: <Home />,
    icon: <CgMail />,
    label: "Opening",
  },
  {
    path: "/couple",
    element: <Couple />,
    icon: <GiLovers />,
    label: "Couple",
  },
  {
    path: "/closing",
    element: <Closing />,
    icon: <GiLovers />,
    label: "Closing",
  },
  {
    path: "/location",
    element: <Place />,
    icon: <TbMapShare />,
    label: "Location",
  },
  {
    path: "/rsvp",
    element: <Rsvp />,
    icon: <FaMessage />,
    label: "RSVP",
  },
];

export default routes;
