import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from "react-router-dom";
import routes from "./Utils/Route";
import MenuBar from "./Components/MenuBar";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function LayoutApp() {
  const location = useLocation();
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const invitationPage = routes.find(route => route.id === 1);
  const isInvitationPage = location.pathname === invitationPage?.path;

  return (
    <main className="max-w-[500px] mx-auto relative z-10 after:absolute after:-z-10 after:inset-0 after:bg-[#FAE7C7]/60 min-h-screen bg-[url('https://images.unsplash.com/photo-1695037520017-ed701ef8bd70?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*/:name" element={<LayoutApp />} />
      </Routes>
      {!isInvitationPage && <MenuBar />}
      <Toaster />
    </main>
  );
}

function App() {
  return (
    <Router>
      <LayoutApp />
    </Router>
  );
}

export default App;
