import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import LoggedInNavbar from "./components/loggedInNavbar";
import Homepage from "./components/homepage";
import Plants from "./components/Navigation/Plants";
import Seeds from "./components/Navigation/Seeds";
import Service from "./components/Navigation/Service";
import Pcare from "./components/Navigation/Pcare";
import Contact from "./components/Navigation/Contact";
import Error from "./components/Navigation/Error";
import Footer from "./components/Navigation/Footer";
import Account from "./components/Navigation/Account";
import NewUser from "./components/Navigation/NewUser";
import Userpage from "./components/Navigation/Userpage";
import Filter from "./components/Navigation/Filter";
import Show from "./components/Navigation/Show";
import Working from "./components/Working";
import Forms from "./components/Forms";
import Formes from "./components/Formes";
import SingleProduct from "./components/ProductScreen/SingleProduct"; // Corrected import statement
import AddToCartButton from "./components/ProductScreen/AddToCartPage"; // Import the AddToCartButton component
import data from "./components/Data/data";
import data2 from "./components/Data/data2";
import Admin from "./components/Admin";
import cart from "./context/CartContext";
import Mumbai from "./components/VendorLocation/Mumbai";
import Pune from "./components/VendorLocation/Pune";
import Thane from "./components/VendorLocation/Thane";
import Satara from "./components/VendorLocation/Satara";
import About from "./components/About";
import Admindashboard from "./components/Admindashboard";
import AddToCartPage from "./components/ProductScreen/AddToCartPage";
import SessionState from "./context/SessionState";
import SessionContext from "./context/Session";
import NewAdmin from "./components/NewAdmin";
import Userinfo from "./components/admindashdata/Userinfo";
import Profile from "./components/User/Profile";

function App() {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const session = useContext(SessionContext);
  useEffect(() => {
    if (window.location.pathname === "/Show") {
      // corrected window.location.pathname
      setHideNavbar(true);
      setHideHeader(true);
      setHideFooter(true);
    } else {
      setHideNavbar(false);
      setHideHeader(false);
      setHideFooter(false);
    }
  }, []);

  const handleLogin = () => {
    // Perform user authentication (e.g., login with credentials)
    // After successful login, update isLoggedIn state to true
    if(session.sessionId != 0) {
      console.log("Session Created: ", session.sessionId);
    }
    setIsLoggedIn(true);
  };

  const handleAddToCart = (item) => {
    // Implement the logic to add the item to the cart
    console.log("Item added to cart:", item);
  };

  
  // let cart = useContext(cart);
  return (
    <>
    <SessionState>
      <BrowserRouter>
        {!hideHeader && <Header />}
        {!hideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/collections/plants" element={<Plants />} />
          <Route path="/collections/seeds" element={<Seeds />} />
          <Route path="/collections/service" element={<Service />} />
          <Route path="/collections/GTools" element={<Pcare />} />
          <Route path="/collections/Contact" element={<Contact />} />
          {isLoggedIn ? (
            <Route path="/Userpage" element={<Userpage />} />
          ) : (
            <Route
              path="/Account"
              element={<Account handleLogin={handleLogin} />}
            />
          )}
          <Route path="/Filter" element={<Filter />} />
          <Route path="/Show" element={<Show />} />
          <Route path="/NewUser" element={<NewUser />} />
          <Route path="/Userpage" element={<Userpage />} />
          <Route path="*" element={<Error />} />
          <Route path="/Working" element={<Working />} />
          <Route path="/Forms" element={<Forms />} />
          <Route path="/Formes" element={<Formes />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/newadmin" element={<NewAdmin />} />
          <Route path="/userinfo" element={<Userinfo />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/SingleProduct/:id"
            element={<SingleProduct data={data} />}
          />{" "}
          {/* Pass handleAddToCart as prop */}
          <Route
            path="/SingleProduct/:id"
            element={<SingleProduct data={data2} />}
          />{" "}
          {/* Pass handleAddToCart as prop */}
          <Route path="/AddToCartButton" element={<AddToCartButton />} />
          <Route path="/addtocartpage" element={<AddToCartPage />} />

          <Route path="/About" element={<About />} />
          <Route path="/mumbai" element={<Mumbai />} />
          <Route path="/pune" element={<Pune />} />
          <Route path="/thane" element={<Thane />} />
          <Route path="/satara" element={<Satara />} />
          <Route path="/admindashboard" element={<Admindashboard />} />
        </Routes>
        {!hideFooter && <Footer />}
      </BrowserRouter>
    </SessionState>
    </>
  );
}

export default App;
