import Home from "../Pages/Home";
import Couple from "../Pages/Couple";
import { GiLovers } from "react-icons/gi";
import { CgClose, CgMail } from "react-icons/cg";
import { FaGift, FaMessage } from "react-icons/fa6";
import { TbMapShare } from "react-icons/tb";
import Place from "../Pages/Location";
import Closing from "../Pages/Closing";
import Rsvp from "../Pages/Rsvp";
import Gift from "../Pages/Gift";
import Galery from "../Pages/Galery.tsx";
import { ImImages } from "react-icons/im";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/:name",
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
    path: "/galery",
    element: <Galery />,
    icon: <ImImages /> ,
    label: 'Galery'
  },
  {
    path: "/closing",
    element: <Closing />,
    icon: <CgClose />,
    label: "Closing",
  },{
    path: "/",
    element: <Navigate to="/people-invitation" replace />,
  },
];

export default routes;
