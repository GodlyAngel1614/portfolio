import { useRoutes } from 'react-router-dom';
import React from 'react';
import Home from "./components/pages/Home.jsx";
import Nav from "./components/elements/Nav.jsx";
import Roblox from "./components/pages/Roblox.jsx";
import Godot from "./components/pages/Godot.jsx";
import About from "./components/pages/About.jsx";
import AboutMain from "./components/pages/AboutMPage.jsx";
import './App.css';


const routes = [
    { path: '/', element: <Home /> },
    { path: '/roblox', element: <Roblox /> },
    { path: '/godot', element: <Godot /> },
    { path: '/about', element: <About /> },
    { path: '/a', element: <AboutMain /> },

];

function App() {
    const element = useRoutes(routes);
    return (
        <>
            <title> Portfolio </title>
            <Nav />
            {element}
        </>
    );
}

export default App;
