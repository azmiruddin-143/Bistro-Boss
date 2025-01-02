import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration />

        </div>
    );
};

export default Root;