import Home from "../Pages/Home";
import Couple from "../Pages/Couple";
import { GiLoveHowl, GiLovers } from "react-icons/gi";
import RSVP from "../Pages/RSVP";
import { CgMail } from "react-icons/cg";
import { FaMessage } from "react-icons/fa6";

const routes = [
  {
    path: "/",
    element: <Home />,
    icon: <CgMail />,
    label: "Opening"
  },
  {
    path: "/couple",
    element: <Couple />,
    icon: <GiLovers />,
    label: "Couple"
  },
  {
    path: "/rsvp",
    element: <RSVP />,
    icon: <FaMessage />,
    label: "RSVP"
  },
  {
    path: "/rsvp",
    element: <RSVP />,
    icon: <GiLoveHowl />,
    label: "RSVP"
  },
  {
    path: "/rsvp",
    element: <RSVP />,
    icon: <GiLoveHowl />,
    label: "RSVP"
  },
  {
    path: "/rsvp",
    element: <RSVP />,
    icon: <GiLoveHowl />,
    label: "RSVP"
  },
  {
    path: "/rsvp",
    element: <RSVP />,
    icon: <GiLoveHowl />,
    label: "RSVP"
  },
  {
    path: "/rsvp",
    element: <RSVP />,
    icon: <GiLoveHowl />,
    label: "RSVP"
  },
];

export default routes;
