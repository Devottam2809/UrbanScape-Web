import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer ";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import Shop from "./pages/Shop";

{
  /*
  import LoginForm from "./pages/Loginform";
  import Signup from "./pages/Signup";
*/
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />
        <Route path="/shop" element={<Shop />} />
        
        {/*  
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
        
          */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
