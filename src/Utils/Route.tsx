import Home from "../Pages/Home";
import Couple from "../Pages/Couple";
import { CgClose } from "react-icons/cg";
import { FaGift, FaImage, FaMapLocation, FaMessage } from "react-icons/fa6";
import Place from "../Pages/Location";
import Closing from "../Pages/Closing";
import Rsvp from "../Pages/Rsvp";
import Gift from "../Pages/Gift";
import Galery from "../Pages/Galery.tsx";
import { FaMailBulk } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";

const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    icon: <FaMailBulk size={20} />,
    label: "Opening",
  },
  {
    id: 2,
    path: "/couple",
    element: <Couple />,
    icon: <GiLovers size={20} />,
    label: "Couple",
  },
  {
    id: 3,
    path: "/location",
    element: <Place />,
    icon: <FaMapLocation size={20} />,
    label: "Location",
  },
  {
    id: 4,
    path: "/rsvp",
    element: <Rsvp />,
    icon: <FaMessage size={20} />,
    label: "RSVP",
  },
  {
    id: 5,
    path: "/gift",
    element: <Gift />,
    icon: <FaGift size={20} />,
    label: "Gift",
  },
  {
    id: 6,
    path: "/galery",
    element: <Galery />,
    icon: <FaImage size={20} />,
    label: "Galery",
  },
  {
    id: 7,
    path: "/closing",
    element: <Closing />,
    icon: <CgClose size={20} />,
    label: "Closing",
  },
];

export default routes;
