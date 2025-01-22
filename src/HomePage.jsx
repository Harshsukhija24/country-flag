import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./Provider/themeContext";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import CountryGrid from "./Components/CountryGrid";

const HomePage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [allData, setAllData] = useState([]);
  const [query, setQuery] = useState("");
  const [countryName, setCountryName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchByRegion() {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/region/${countryName}`
        );
        const data = await res.json();
        setAllData(data);
      } catch (error) {
        console.log(error);
      }
    }

    if (countryName && countryName !== "Filter by Region") {
      fetchByRegion();
    } else {
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
    }
  }, [countryName]);

  function sortByPopulation() {
    const sorted = [...allData].sort((a, b) => a.population - b.population);
    setAllData(sorted);
  }

  function sortByDesPopulation() {
    const sorted = [...allData].sort((a, b) => b.population - a.population);
    setAllData(sorted);
  }

  function sortByArea() {
    const sorted = [...allData].sort((a, b) => a.area - b.area);
    setAllData(sorted);
  }

  function sortByDesArea() {
    const sorted = [...allData].sort((a, b) => b.area - a.area);
    setAllData(sorted);
  }

  const filterData = allData
    .filter(
      (country) =>
        countryName === "" ||
        countryName === "Filter by Region" ||
        country.region === countryName
    )
    .filter(
      (country) =>
        query === "" ||
        country.name.common.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <>
      <div
        className={`pt-6 pl-3    pb-6 ${
          isDarkMode ? "bg-[#202D36]" : "bg-slate-50"
        }`}
      >
        <div className="flex flex-col md:flex-row md:justify-between">
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="Search for a country"
            className={` ${
              isDarkMode
                ? "bg-[#2b3743] text-white placeholder-white"
                : "bg-white"
            }  flex justify-start p-2 w-72 shadow-xl rounded md:w-1/3 md:ml-12 md:h-14 md:mt-7`}
          />
          <div className="flex">
            <button
              onClick={sortByPopulation}
              className={`${
                isDarkMode ? "bg-[#2b3743] text-white" : "bg-white"
              } mt-7 w-32 md:ml-2 mr-5 md:w-32 shadow-lg h-12`}
            >
              <FaArrowUp className="-mb-5 ml-2" /> Population
            </button>
            <button
              onClick={sortByDesPopulation}
              className={`${
                isDarkMode ? "bg-[#2b3743] text-white" : "bg-white"
              } mt-7  w-32 md:w-32 md:mr-2 shadow-lg h-12`}
            >
              <FaArrowDown className="-mb-5 ml-2" />
              Population
            </button>
          </div>
          <div className="flex">
            <button
              onClick={sortByArea}
              className={`${
                isDarkMode ? "bg-[#2b3743] text-white" : "bg-white"
              } mt-7 w-24 mr-6 md:ml-1 md:mr-2 md:w-20 shadow-lg h-12`}
            >
              <FaArrowUp className="-mb-5 ml-1" /> Area
            </button>
            <button
              onClick={sortByDesArea}
              className={`${
                isDarkMode ? "bg-[#2b3743] text-white" : "bg-white"
              } mt-7 w-24 md:w-20 md:mr-2 shadow-lg h-12`}
            >
              <FaArrowDown className="-mb-5 ml-1" /> Area
            </button>
          </div>

          <select
            onChange={(e) => setCountryName(e.target.value)}
            className={`${
              isDarkMode
                ? "bg-[#2b3743] text-white placeholder-white"
                : "bg-white text-black"
            } p-4 mt-10 w-48 rounded md:mr-12 md:mt-7 md:h-14`}
          >
            <option
              value="Filter by Region"
              className={`${
                isDarkMode ? "bg-[#2b3743] text-white" : "bg-white text-black"
              }`}
            >
              Filter by Region
            </option>
            <option
              value="Africa"
              className={`${
                isDarkMode ? "bg-[#2b3743] text-white" : "bg-white text-black"
              }`}
            >
              Africa
            </option>
            <option
              value="Americas"
              className={`${
                isDarkMode ? "bg-[#2b3743] text-white" : "bg-white text-black"
              }`}
            >
              Americas
            </option>
            <option
              value="Asia"
              className={`${
                isDarkMode ? "bg-[#2b3743] text-white" : "bg-white text-black"
              }`}
            >
              Asia
            </option>
            <option
              value="Antarctic"
              className={`${
                isDarkMode ? "bg-[#2b3743] text-white" : "bg-white text-black"
              }`}
            >
              Antarctic
            </option>
            <option
              value="Europe"
              className={`${
                isDarkMode ? "bg-[#2b3743] text-white" : "bg-white text-black"
              }`}
            >
              Europe
            </option>
            <option
              value="Oceania"
              className={`${
                isDarkMode ? "bg-[#2b3743] text-white" : "bg-white text-black"
              }`}
            >
              Oceania
            </option>
          </select>
        </div>

        <CountryGrid
          filterData={filterData}
          navigate={navigate}
          isDarkMode={isDarkMode}
        />
        <div
          className={` ${
            isDarkMode ? "bg-[#2b3743] text-white " : "bg-white"
          }  mb-[18.3rem]`}
        ></div>
      </div>
    </>
  );
};

export default HomePage;
