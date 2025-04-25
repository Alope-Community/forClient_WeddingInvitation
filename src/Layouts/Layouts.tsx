import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import routes from '../Utils/Route';
import MenuBar from '../Components/MenuBar';
import { Toaster } from 'react-hot-toast';
import AOS from "aos";
import "aos/dist/aos.css";

const Layouts = () => {
    const location = useLocation();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const invitationPage = routes.find(route => route.id === 1);
    const isInvitationPage = location.pathname === invitationPage?.path;
    return (
        <main className="overflow-hidden sm:bg-[]bg-[#FAE7C7]/60 bg-cover bg-no-repeat bg-center h-[100%] sm:bg-[url('https://images.unsplash.com/photo-1695037520017-ed701ef8bd70?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] sm:bg-fixed">
            <div className="lg:w-[500px] sm:w-full mx-auto relative z-10 after:absolute after:-z-10 after:inset-0 after:bg-[#FAE7C7]/60 min-h-screen bg-[url('https://images.unsplash.com/photo-1695037520017-ed701ef8bd70?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                <Routes>
                    <Route path="/" element={<Navigate to="/:name" replace />} />
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                    <Route path="*/:name" element={<Layouts />} />
                </Routes>
                {!isInvitationPage && <MenuBar />}
                <Toaster />
            </div>
        </main >
    )
}

export default Layouts

