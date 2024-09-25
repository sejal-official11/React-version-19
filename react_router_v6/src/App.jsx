import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import {ErrorPage} from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetApiData";

import { MovieDetails } from "./components/UI/MovieDetails";
import { getMoviesDetails } from "./api/GetMovieDetails";

import { contactData } from "./pages/Contact";

export const App = () => {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element = {<Home />} />
  //       <Route path = "/about" element= {<About />} />
  //       <Route  path= "/movie" element= {<Movie />}/>
  //       <Route path = "/contact" element = {<Contact/>} />
  //     </Route>
  //   )
  // );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
      // errorElement: <ErrorPage />,
    },
    {
      path: "/movie",
      element: <Movie />,
      loader: getMoviesData
    },
    {
      path: "/movie/:movieID",
      element: <MovieDetails />,
      loader: getMoviesDetails,
    },
    {
      path: "/contact",
      element: <Contact />,
      action: contactData,
    },
    // {
    //   path:"*",
    //   element: <ErrorPage />,

    // },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
