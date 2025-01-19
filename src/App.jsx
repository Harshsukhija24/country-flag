import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CountryDetail from "./CountryDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryName" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
