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
import ListOfTarget from "./ListOfTarget";
import ListOfEquipement from "./ListOfEquipement";
import ProfileSarah from "./ProfileSarah";
import ProfileBrian from "./ProfileBrian";
import ProfileKen from "./ProfileKen";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
        <Navbar/>
          <>
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/exercises" element={<Exercises/>}/>
              <Route path="/foratletes" element={<ForAtletes/>}/>
              <Route path="/forcoaches" element={<ForCoaches/>}/>
              <Route path="/tempo" element={<Tempo/>}/>
              <Route path="/plateau" element={<Plateau/>}/>
              <Route path="/kettlebell" element={<Kettlebell/>}/>
              <Route path="/signin" element={<SignIn/>} />
              <Route path="/user/:userId" element={<Profile/>}/>
              <Route path="/registration" element={<Registration/>}/>
              <Route path="/allexercisespage" element={<AllExercisesPage/>}/>
              <Route path="/listofbody" element={<ListOfBody/>} />
              <Route path="/listoftarget" element={<ListOfTarget/>}/>
              <Route path="/listofequipement" element={<ListOfEquipement/>}/>
              <Route path="/exercises/exercise/:exercise" element={<ItemPage />}/>
              <Route path="/profilesarah" element={<ProfileSarah/>}/>
              <Route path="/profilebrian" element={<ProfileBrian/>}/>
              <Route path="/profileken" element={<ProfileKen />}/>
            </Routes>
          <Footer />
        </>
    </BrowserRouter> 
  );
}

export default App;
