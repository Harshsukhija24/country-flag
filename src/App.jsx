import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CountryDetail from "./CountryDetail";
import PageNotFound from "./PageNotFound";
import MainLayout from "./layout/Mainlayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":countryName" element={<CountryDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
