import { createBrowserRouter } from "react-router-dom";
import Home from '../components/home/Home'
import CAdetail from "../components/detail/CAdetail";

export default function routerObject(props) {

  const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />
  }, {
    path: "/detail/:id",
    element: <CAdetail/>
  }])

  return router;

}