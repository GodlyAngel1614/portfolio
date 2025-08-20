import { useRoutes } from 'react-router-dom';
import React from 'react';
import Home from "./components/pages/Home.jsx";
import Nav from "./components/elements/Nav.jsx";
import Godot from "./components/pages/Godot.jsx";
import About from "./components/pages/about/About.jsx";
import AboutMain from "./components/pages/about/AboutMPage.jsx";
import './App.css';
import TestFile from "./components/pages/roblox/TestFile.jsx";
import VideoLoad from "./components/pages/roblox/Videos.jsx";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/roblox', element: <TestFile /> },
    { path: '/godot', element: <Godot /> },
    { path: '/about', element: <About /> },
    { path: '/a', element: <AboutMain /> },

        {/*  Roblox Pages  */},

    {path: "/room/:type", element: <VideoLoad /> },
    {path: "/back", element: <TestFile /> },
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
