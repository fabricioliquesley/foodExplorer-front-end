import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { MealDetails } from "../pages/MealDetails";
import { CreateMeal } from "../pages/CreateMeal";
import { EditMeal } from "../pages/EditMeal";
import { Order } from "../pages/Order";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meal/:id" element={<MealDetails />} />
            <Route path="/create" element={<CreateMeal />} />
            <Route path="/edit/:id" element={<EditMeal />} />
            <Route path="/order" element={<Order />} />
        </Routes>
    )
}