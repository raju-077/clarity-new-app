import React from "react";
import { BrowserRouter, Routes, Route } from  "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import HomeDetails from "./pages/Home/Homedetails";
import HomeLayout from "./pages/Home/HomeLayout"
import Technology from "./pages/Techonolgy/Techonolgy";
import TechonolgyLayout from "./pages/Techonolgy/TechonolgyLayout";
import TechnologyDetails from "./pages/Techonolgy/TechonolgyDetails";
import Sports from "./pages/Sports/Sports";
import Business from "./pages/Business/Business";
import Politics from "./pages/Politics/Politics";
import Health from "./pages/Health/Health";
import Entertainment from "./pages/Entertainment/Entertainment";

import About from "./components/About";

import "./App.css";
import "./index.css";

export default function App() {

  return (
     <BrowserRouter>
        <Routes>
            <Route  element={<Layout />}>
               <Route path="/" element={<HomeLayout />}>
                  <Route index element={<Home/>} />
                  <Route path="news/:id" element={<HomeDetails/>} />
                  <Route path="*" element={<h1>404 notfound</h1>} />
               </Route>
               <Route path="technology" element={<TechonolgyLayout />} >
                  <Route index element={<Technology />} />
                  <Route path=":id" element={<TechnologyDetails />} />
                  <Route path="*" element={<h1>404 notfound</h1>} />
               </Route>
               <Route path="sports" element={<Sports />} />
               <Route path="business" element={<Business />} />
               <Route path="politics" element={<Politics />} />
               <Route path="health" element={<Health />} />
               <Route path="entertainment" element={<Entertainment />} />
               <Route path="aboutus" element={<About/>}/>
               <Route path="*" element={<h1>404 notfound</h1>} />
            </Route>  
        </Routes>
     </BrowserRouter>
  );
}