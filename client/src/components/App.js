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
import ItemPage from "./ItemPage";
import Profile from "./Profile";
import Registration from "./Registration";
import ListOfBody from "./ListOfBody";

const App = () => {
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
          <Route path="/user/:userId" element={<Profile/>} />
          <Route path="/registration" element={<Registration/>} />
        <Route
          path="/allexercisespage"
          element={<AllExercisesPage/>}
        />
        <Route
          path="/listofbody"
          element={<ListOfBody/>}
        />
        <Route path="/exercises/exercise/:exercise" element={<ItemPage />} />
      </Routes>
      <Footer />
    </>
  </BrowserRouter>
    
  );
}



export default App;
