import { BrowserRouter } from "react-router-dom";
import { UserRoutes } from "./user.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}