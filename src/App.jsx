import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SingPage from "./routes/singlePage/singlePage";
import Login from "./routes/login/login";
import ProfilePage from "./routes/profilePage/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SingPage/>
        },
        {
          path: "/profile",
          element: <ProfilePage/>
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
