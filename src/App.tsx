import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "@/pages/home.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
