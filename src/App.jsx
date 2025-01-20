import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CountryDetail from "./CountryDetail";
import PageNotFound from "./PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryName" element={<CountryDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
