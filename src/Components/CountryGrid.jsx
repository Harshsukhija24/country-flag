import CountryCard from "./CountryCard";

const CountryGrid = ({ filterData, navigate, isDarkMode }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 mt-6 md:flex-row md:flex-wrap md:gap-20 xl:pr-20">
      {filterData.map((country) => (
        <CountryCard
          key={country.name.common}
          country={country}
          navigate={navigate}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
};

export default CountryGrid;
