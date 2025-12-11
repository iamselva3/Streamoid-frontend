import { Routes, Route } from "react-router-dom";
import MappingPage from "./Pages/MappingPage";
import SellerUploadPage from "./Pages/SellerUploadPage";
import MarketplaceUploadPage from "./Pages/MarketplaceUploadPage";
import MappingListPage from "./Pages/MappingList";
import HomePage from "./Pages/Home";
import NavBar from "./Pages/Nav";


function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar could go here if needed */}
      <NavBar />
       <Routes>

        <Route path="/home" element={<HomePage />} />
        {/* 1️⃣ Marketplace Template Upload */}
        <Route path="/marketplace-upload" element={<MarketplaceUploadPage />} />

        {/* 2️⃣ Seller File Upload */}
        <Route path="/seller-upload" element={<SellerUploadPage />} />

        {/* 3️⃣ Mapping Page */}
        <Route path="/mapping" element={<MappingPage />} />

        {/* 4️⃣ Saved Mappings */}
        <Route path="/mappings" element={<MappingListPage />} />

      </Routes>
    </div>
     
    </>
  );
}

export default App;
