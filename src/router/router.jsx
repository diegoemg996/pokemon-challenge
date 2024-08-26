import { createBrowserRouter, Link } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { SinglePokemon } from "../pages/SinglePokemon";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/:name",
    element: <SinglePokemon />,
  },
]);
