import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import VehicleUseReport from "./VehicleUseReport";

function Root() {
    return <div>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<VehicleUseReport/>} />
            </Routes>
        </div>
}

export default Root;