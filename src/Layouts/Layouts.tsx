import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import routes from "../Utils/Route";
import MenuBar from "../Components/MenuBar";
import { Toaster } from "react-hot-toast";
import AOS from "aos";

const Layouts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const [guestName, seGuestName] = useState("");

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const f = searchParams.get("f");
  const isInvitationPage = location.pathname === "/";

  useEffect(() => {
    seGuestName(f || "Tamu");

    if (!f) {
      navigate(`${location.pathname}?f=${guestName}`, { replace: true });
    }
  }, [f, location.pathname, navigate]);

  return (
    <main className="overflow-hidden sm:bg-[]bg-[#FAE7C7]/60 bg-cover bg-no-repeat bg-center h-[100%] sm:bg-[url('assets/bg.avif')] sm:bg-fixed">
      <div className="lg:w-[500px] sm:w-full mx-auto relative z-10 after:absolute after:-z-10 after:inset-0 after:bg-[#FAE7C7]/60 min-h-screen bg-[url('assets/bg.avif')]">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={`${route.path}`} element={route.element} />
          ))}
        </Routes>

        {!isInvitationPage && <MenuBar />}
        <Toaster />
      </div>
    </main>
  );
};

export default Layouts;
