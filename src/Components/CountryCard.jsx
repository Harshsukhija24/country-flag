const CountryCard = ({ country, navigate, isDarkMode }) => {
  function handleClick() {
    navigate(`/${country.name.common}`);
  }

  const { name, flags, population, region, capital } = country;

  return (
    <div
      onClick={handleClick}
      key={name.common}
      className={`flex flex-col w-64 mt-5 ${
        isDarkMode ? "bg-[#2b3743] text-white" : "bg-white"
      } text-start justify-center shadow-lg`}
    >
      <img
        src={flags.png}
        alt={name.common}
        className="w-full h-32 object-cover"
      />
      <h1 className="pl-3 mt-4 font-semibold mb-1">{name.common}</h1>
      <p className="pl-3">
        <span className="font-medium">Population:</span> {population}
      </p>
      <p className="pl-3">
        <span className="font-medium">Region:</span> {region}
      </p>
      <p className="pl-3 mb-5">
        <span className="font-medium">Capital:</span> {capital}
      </p>
    </div>
  );
};

export default CountryCard;
