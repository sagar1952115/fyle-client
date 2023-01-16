import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./components/cards/Cards";
import HomePage from "./pages/home-page/HomePage";
import LandingPage from "./pages/landing-page/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
