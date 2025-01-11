import {Outlet} from "react-router";

const DashboardLayout = () => {
    return (
        <div>
            <h1>Layout</h1>
            <Outlet/>
        </div>
    );
};

export default DashboardLayout;