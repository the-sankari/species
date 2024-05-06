import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Root from "./routes/Root.jsx";
import { animals, birds, fishes, insects } from "./animalsList.js";
import CategoryPage from "./routes/CategoryPage.jsx";

function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects, fishes });

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: ":categpry", element: <CategoryPage {...zoo} /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
