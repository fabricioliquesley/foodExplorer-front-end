import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { MealDetails } from "../pages/MealDetails";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meal/:id" element={<MealDetails />} />
        </Routes>
    )
}