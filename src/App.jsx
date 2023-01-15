import "./App.css";
import LandingPage from "./pages/landing-page/LandingPage";
import HomePage from "./pages/home-page/HomePage";
import Cards from "./components/cards/Cards";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/cards" element={<Cards />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
