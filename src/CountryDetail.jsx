import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Components/Navbar";

const CountryDetail = () => {
  const { cca3 } = useParams();
  console.log(cca3);

  const [countryDetail, setCountryDetail] = useState(null);
  useEffect(() => {
    async function FetchDetail() {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
        const data = await res.json();
        setCountryDetail(data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    FetchDetail();
  }, [cca3]);

  return (
    <>
      <Navbar />
      <div className="p-10">
        <button className="p-2 shadow-lg w-24 md:ml-6 md:mb-16">Back</button>
        <div>
          {countryDetail ? (
            <div className="flex gap-6 flex-col md:flex-row md:ml-6">
              <div>
                <img
                  src={countryDetail.flags.png}
                  alt={countryDetail.name.common}
                  className="mt-4 w-72 h-40 md:w-[496px] md:h-[296px]"
                />
              </div>
              <div className=" flex flex-col gap-6 md:flex-row md:mt-24 md:ml-24 ">
                <div className="md:mr-20">
                  <p className="  font-extrabold md:mb-6 md:-mt-11 ">
                    {countryDetail.name.common}
                  </p>

                  <p>
                    <span className="font-medium  mr-1">Native Name:</span>
                    {countryDetail.name.nativeName.eng.common}
                  </p>
                  <p>
                    <span className="font-medium  mr-1">Population:</span>

                    {countryDetail.population}
                  </p>

                  <p>
                    <span className="font-medium  mr-1">Region:</span>

                    {countryDetail.region}
                  </p>

                  <p>
                    <span className="font-medium  mr-1">Sub Region:</span>

                    {countryDetail.subregion}
                  </p>
                  <p>
                    <span className="font-medium  mr-1">Captial:</span>

                    {countryDetail.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-medium  mr-1">Top Level Domain:</span>

                    {countryDetail.tld[0]}
                  </p>

                  <p>
                    <span className="font-medium  mr-1">Currencies:</span>

                    {countryDetail?.currencies[0]?.name || "unknown"}
                  </p>

                  <p>
                    <span className="font-medium  mr-1">Languages:</span>

                    {countryDetail.languages.eng}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
