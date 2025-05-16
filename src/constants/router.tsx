import { createBrowserRouter } from "react-router-dom";
import AuthenticationLayout from "../components/layout/Authentication-layout";
import Login from "../pages/authentication/login/Main";
import DashboardLayout from "../components/layout/Dashboard-layout";
import Dashboard from "../pages/dashbaord/Main";
import Notification from "../pages/notification/Main";
import Content from "../pages/content/Main";
import User from "../pages/user/Main";
import Settings from "../pages/settings/Main";
import AddNotification from "../pages/notification/components/AddNotification/AddNotification";
import AllContent from "../pages/content/components/AllContent/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticationLayout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <Dashboard />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "notification/add",
        element: <AddNotification />,
      },
      {
        path: "content/all",
        element: <AllContent />,
      },
      {
        path: "content/video",
        element: <Content contentType={"video"} />,
      },
      {
        path: "content/image",
        element: <Content contentType={"image"} />,
      },
      {
        path: "content/text",
        element: <Content contentType={"text"} />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "setting",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
