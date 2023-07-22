import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

import { AboutPetfinder } from "../Pages/AboutPetfinder";
import { AdoptingPets } from "../Pages/AdoptingPets";
import ContributionForm from "../Pages/ContributionForm";
import { CatProduct } from "../Components/Products/Cat_adopt";
import { DogProduct } from "../Components/Products/Dog_adopt";


export const AllRoutes = () => {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutPetfinder" element={<AboutPetfinder/>}/>
            <Route path="/AdoptingPets" element={<AdoptingPets/>}/>
            <Route path="/ContributionForm" element={<ContributionForm/>}/>
            <Route path="/catadopt" element={<CatProduct/>}/>
            <Route path="/dogadopt" element={<DogProduct/>}/>
         </Routes>
      </div>
   );
};
