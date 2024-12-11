import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizPage from "../pages/QuizPage";
import NotFound from "../pages/NotFound";
import MainLayout from "../layout/MainLayout";
import OverViewPage from "../pages/OverViewPage";
import AuthLayout from "../layout/AuthLayout";
import AboutPage from "../pages/AboutPage";
import SettingsPage from "../pages/SettingsPage";
import Login from "../components/form/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <QuizPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/overview", element: <OverViewPage /> },
      { path: "/settings", element: <SettingsPage /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{ path: "/auth/login", element: <Login /> }],
  },
  { path: "*", element: <NotFound /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
