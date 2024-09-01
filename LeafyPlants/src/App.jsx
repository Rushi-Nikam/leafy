    import React, { useState, useEffect, useContext } from "react";
    import { BrowserRouter, Route, Routes} from "react-router-dom";
    import "./App.css";
    import Header from "./components/header";
    import Navbar from "./components/navbar";
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
   
    import Show from "./components/Navigation/Show";
    import Working from "./components/Working";
    import Forms from "./components/Forms";
    import Formes from "./components/Formes";
    import SingleProduct from "./components/ProductScreen/SingleProduct";
    import ShoppingCart from "./components/ProductScreen/ShoppingCart";
    import Admin from "./components/Admin";
    import Mumbai from "./components/VendorLocation/Mumbai";
    import Pune from "./components/VendorLocation/Pune";
    import Thane from "./components/VendorLocation/Thane";
    import Satara from "./components/VendorLocation/Satara";
    import About from "./components/About";
    import Admindashboard from "./components/Admindashboard";
    import SessionState from "./context/SessionState";
    import SessionContext from "./context/Session";
    import AdminSessionContext from "./context/AdminSessionContext";
    import AdminSessionState from "./context/AdminSessionState";
    import NewAdmin from "./components/NewAdmin";
    import Userinfo from "./components/admindashdata/Userinfo";
    import Profile from "./components/User/Profile";
    import data1 from "./components/Data/data"; // Import data1
    import data2 from "./components/Data/data2"; // Import data2
    import { useCartStore } from "./store/CartStore";
    function App() {
      const [hideNavbar, setHideNavbar] = useState(false);
      const [hideHeader, setHideHeader] = useState(false);
      const [hideFooter, setHideFooter] = useState(false);
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [adminisLoggedIn, setAdminIsLoggedIn] = useState(false);
      const session = useContext(SessionContext);
      const AdminSession = useContext(AdminSessionContext);
    
      const { cart, addToCart, removeFromCart, updateQuantity } = useCartStore();
      useEffect(() => {
        if (window.location.pathname === "/show") {
          setHideNavbar(true);
          setHideHeader(true);
          setHideFooter(true);
        } else {
          setHideNavbar(false);
          setHideHeader(false);
          setHideFooter(false);
        }
      }, ["/show"]);

      const handleAddToCart = (item) => {
      addToCart(item);
      
       
      };
      

      const handleProductRemove = (productId) => {
        removeFromCart(productId);
      };

      const handleQuantityChange = (productId, newQuantity) => {
        updateQuantity(productId, newQuantity);
      };

      const handleLogin = () => {
        if (session.sessionId !== 0) {
          console.log("Session Created: ", session.sessionId);
        }
        setIsLoggedIn(true);
        
        window.location.href = "/Userpage";
      };
      const AdminhandleLogin = () => {
        if (AdminSession.AdminSessionId !== 0) {
          console.log("Session Created: ", AdminSession.AdminSessionId);
        }
        setAdminIsLoggedIn(true);
        // Redirect to Userpage
        window.location.href = "/admindashboard";
      };

      return (
        <SessionState>
          <AdminSessionState>
         

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
      <Route path="/Account" element={<Account handleLogin={handleLogin} />} />
    )}
      <Route path="/admindashboard" element={<Admindashboard />} />
  
              <Route path="/Show" element={<Show />} />
              <Route path="/NewUser" element={<NewUser />} />
              <Route path="*" element={<Error />} />
              <Route path="/Working" element={<Working />} />
              <Route path="/Forms" element={<Forms />} />
              <Route path="/Formes" element={<Formes />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/newadmin" element={<NewAdmin />} />
              <Route path="/userinfo" element={<Userinfo />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/Userpage" element={<Userpage />} />

              <Route path="/SingleProduct/:id" element={<SingleProduct data={[...data1, ...data2]} handleAddToCart={handleAddToCart} />} />
              <Route path="/shoppingcart" element={<ShoppingCart products={cart} onProductRemove={handleProductRemove} onQuantityChange={handleQuantityChange} />} />
             
              <Route path="/About" element={<About />} />
              <Route path="/mumbai" element={<Mumbai />} />
              <Route path="/pune" element={<Pune />} />
              <Route path="/thane" element={<Thane />} />
              <Route path="/satara" element={<Satara />} />
             {adminisLoggedIn ? <Route path="/admindashboard" element={<Admindashboard  />} /> :<Route path="/" element={<Homepage />} />  } 
            </Routes>
            {!hideFooter && <Footer />}
          </BrowserRouter>
         

          </AdminSessionState>
        </SessionState>
      );
    }

    export default App;
