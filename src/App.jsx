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

  const likesHandler = (name, category, action) => {
    console.log(name, category, action, "was clicked");
  };
  const removeHandler = (name, category) => {
    console.log(name, category ,"removecard was clicked");
  };

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: ":category",
          element: (
            <CategoryPage
              addLike={likesHandler}
              removeLike={likesHandler}
              removeCard={removeHandler}
              {...zoo}
            />
          ),
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
