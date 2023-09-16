import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Hompage from "./components/Hompage/Hompage";
import { Loader as MoviesLooder } from "./components/Content/Content";
import Details, { Loader as movieLoader } from "./components/Detail/DetailPage";

import Error from "./components/ErrorPage/EroorPage";

import "./App.css";

const router = HashRouter([
  {
    path: "/twizz4u.github.io/HNG-Task2/#",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Hompage />, loader: MoviesLooder },
      {
        path: "/twizz4u.github.io/HNG-Task2/#/movies/:id",
        element: <Details />,
        loader: movieLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;

  // return (
  //   <>
  //     {/* <Details /> */}
  //     {/* <Hero />
  //     <Content />
  //     <Footer /> */}
  //   </>
  // );
}

export default App;
