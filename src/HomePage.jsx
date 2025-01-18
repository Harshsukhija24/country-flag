import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [allData, setAllData] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCountryData() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setAllData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCountryData();
  }, []);

  const filterData = query
    ? allData.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      )
    : allData;

  return (
    <>
      <Navbar />
      <div className="pt-6 pl-3 pb-6 bg-slate-50">
        <div className="flex flex-col md:flex-row md:justify-between">
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder=" Search for a country"
            className="flex justify-start p-2 w-72 shadow-xl rounded md:w-1/3 md:ml-12 md:h-14 md:mt-6"
          />

          <select className="p-4 mt-10 w-48 rounded bg-white md:mr-12 md:mt-4 md:h-14">
            <option>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>

        <div className="flex pl-5 flex-col gap-3 mt-6 justify-between align-middle md:flex-row md:flex-wrap md:gap-10 md:pl-10 md:pr-10">
          {filterData.map((country) => (
            <div
              onClick={() => navigate(`/${country.cca3}`)}
              key={country.cca3}
              className="flex flex-col w-64 mt-5 bg-white text-start justify-self-center"
            >
              <div className="shadow-lg">
                <img
                  src={country.flags.png}
                  alt={country.name.common}
                  className="w-full h-32 object-cover"
                />
                <h1 className="pl-3 mt-4 font-semibold mb-1">
                  {country.name.common}
                </h1>
                <p className="pl-3">
                  <span className="font-medium">Population:</span>{" "}
                  {country.population}
                </p>
                <p className="pl-3">
                  <span className="font-medium">Region:</span> {country.region}
                </p>
                <p className="pl-3 mb-5">
                  <span className="font-medium">Capital:</span>{" "}
                  {country.capital}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
