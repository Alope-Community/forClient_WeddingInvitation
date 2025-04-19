import Home from "../Pages/Home";
import Couple from "../Pages/Couple";
import { GiLovers } from "react-icons/gi";
import { CgClose, CgMail } from "react-icons/cg";
import { FaMessage } from "react-icons/fa6";
import { TbMapShare } from "react-icons/tb";
import Place from "../Pages/Location";
import Rsvp from "../Pages/Rsvp.tsx";
import { FaGift } from "react-icons/fa";
import Gift from "../Pages/Gift.tsx";
import Closing from "../Pages/Closing.tsx";

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
  {
    path: "/gift",
    element: <Gift />,
    icon: <FaGift />,
    label: "Gift",
  },
  {
    path: "/closing",
    element: <Closing />,
    icon: <CgClose />,
    label: "Closing",
  },
  {
    path: "/closing",
    element: <Closing />,
    icon: <CgClose />,
    label: "Closing",
  },
];

export default routes;
