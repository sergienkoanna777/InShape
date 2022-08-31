import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import ForAtletes from "./ForAtletes";
import ForCoaches from "./ForCoaches";
import Footer from "./Footer";
import Plateau from "./Plateau";
import Tempo from "./Tempo";
import Kettlebell from "./Kettlebell";
import Navbar from "./Navbar";
import Exercises from "./Exercises";
import SignIn from "./SignIn";
import AllExercisesPage from "./AllExercisesPage";

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <BrowserRouter>
    <GlobalStyles />
    <Navbar/>
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exercises" element={<Exercises/>} />
        <Route path="/foratletes" element={<ForAtletes/>} />
          <Route path="/forcoaches" element={<ForCoaches/>} />
          <Route path="/tempo" element={<Tempo/>} />
          <Route path="/plateau" element={<Plateau/>} />
          <Route path="/kettlebell" element={<Kettlebell/>} />
          <Route path="/signin" element={<SignIn/>} />
          
        {/* <Route
          path="/products/categories/:_category"
          element={<CategoryFeed setLoading={setLoading} loading={loading} />}
        /> */}
        <Route
          path="/allexercisespage"
          element={<AllExercisesPage setLoading={setLoading} loading={loading} />}
        />
        {/* <Route path="/products/:_id" element={<ItemPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="cart/confirmed" element={<ConfirmationPage />} />
        <Route path="/facts" element={<Facts/>} />
        <Route path="/about" element={<About />} />
        <Route path="" element={<h1>404: Oops!</h1>} /> */}
      </Routes>
      <Footer />
    </>
  </BrowserRouter>
    
  );
}



export default App;
