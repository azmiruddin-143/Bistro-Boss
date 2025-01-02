import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Root from "./Mian Root/Root";
import OurMenu from "./Pages/OurMenu";
import OurShop from "./Pages/OurShop";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/ourmenu",
        element: <OurMenu></OurMenu>
      },
      {
        path: "/ourshop",
        element: <OurShop></OurShop>
      },
    
    ]
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  }
]);