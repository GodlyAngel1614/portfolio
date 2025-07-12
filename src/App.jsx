import { useRoutes } from 'react-router-dom';
import React from 'react';
import Home from "./components/pages/Home.jsx";
import Nav from "./components/elements/Nav.jsx";
import Roblox from "./components/pages/Roblox.jsx";
import Godot from "./components/pages/Godot.jsx";
import './App.css';


const routes = [
    { path: '/', element: <Home /> },
    { path: '/roblox', element: <Roblox /> },
    { path: '/godot', element: <Godot /> },

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
