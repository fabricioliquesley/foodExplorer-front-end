import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { MealDetails } from "../pages/MealDetails";
import { CreateMeal } from "../pages/CreateMeal";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meal/:id" element={<MealDetails />} />
            <Route path="/create" element={<CreateMeal />} />
        </Routes>
    )
}