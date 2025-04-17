import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Utils/Route";
import MenuBar from "./Components/MenuBar";
import Couple from "./Pages/Couple";

function App() {
  return (
    <>
      <Router>
        <main className="max-w-[500px] mx-auto p-5 relative z-10 after:absolute after:-z-10 after:inset-0 after:bg-[#FAE7C7]/60 min-h-screen bg-[url('https://images.unsplash.com/photo-1695037520017-ed701ef8bd70?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
