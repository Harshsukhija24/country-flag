import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CountryDetail from "./CountryDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:cca3" element={<CountryDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
