import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Shop from "./Pages/shop";
import Wishlist from "./Pages/wishlist";
import CheakOut from "./Pages/cheakOut";
import Contact from "./Pages/Contact";
import TrackOrder from "./Pages/trackOrder";
import PageNotFound from "./Pages/PageNotFound";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./Component/RootLayout";
import Home2 from "./Pages/Home2/Home2";
import Home2Layout from "./Component/Home2Layout";
import Cart from "./Pages/Cart/Cart";
import ProductDetails from "./Component/ProductDetails/ProductDetails";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/cheakOut" element={<CheakOut />}></Route>
          <Route path="/trackOrder" element={<TrackOrder />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product-details" element={<ProductDetails />}></Route>
          <Route path="/PageNotFound" element={<PageNotFound />}></Route>
        </Route>
        <Route path="/home-2" element={<Home2Layout />}>
        <Route index element={<Home2 />}></Route>
        <Route path="/home-2/about" element={<About />}></Route>
        <Route path="/home-2/home-2" element={<Home2 />}></Route>
        <Route path="/home-2/Contact" element={<Contact />}></Route>
        <Route path="/home-2/shop" element={<Shop />}></Route>
        <Route path="/home-2/blog" element={<Blog />}></Route>
        <Route path="/home-2/wishlist" element={<Wishlist />}></Route>
        <Route path="/home-2/cheakOut" element={<CheakOut />}></Route>
        <Route path="/home-2/trackOrder" element={<TrackOrder />}></Route>
        <Route path="/home-2/cart" element={<Cart />}></Route>
        <Route path="/home-2/PageNotFound" element={<PageNotFound />}></Route>
      </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
