import { Outlet } from "react-router-dom";



const Main = () => {
    return (
        <div>
            <h1 className="text-center text-5xl">This is Main component</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;