import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
// layouts
import RootLayout from "./layouts/RootLayout";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

import Publication from "./pages/PublicationPage";
import PublicationDetailsPage from "./pages/PublicationDetailsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='publications' element={<Publication />} />
      <Route path='publications/:id' element={<PublicationDetailsPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
