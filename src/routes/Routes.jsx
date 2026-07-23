import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import BookDetails from "../pages/BookDetails";
import PagesToRead from "../pages/PagesToRead";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "listed-books",
        Component: ListedBooks,
      },
      {
        path: "book/:id",
        Component: BookDetails,
      },
      {
        path: "pages-to-read",
        Component: PagesToRead,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);

export default router;