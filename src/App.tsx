import {BrowserRouter, Routes, Route} from "react-router";
import DashboardLayout from "@/components/layout/dashboard-layout.tsx";
import HomePage from "@/pages/home.tsx";
import LoginPage from "@/pages/login.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DashboardLayout/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
                <Route path="login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
