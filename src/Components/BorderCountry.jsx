
const BorderCountries = ({ borderCountries, navigate }) => {
  return (
    <div>
      <p className="font-medium">Borders:</p>
      {borderCountries.length > 0 ? (
        borderCountries.map((borderCountry) => (
          <button
            key={borderCountry.cca3}
            className={`$ {
              isDarkMode
                ? "bg-[#2b3743] text-white"
                : "bg-white text-black"
            } border rounded px-2 py-1 m-1 shadow`}
            onClick={() => navigate(`/${borderCountry.name.common}`)}
          >
            {borderCountry.name.common}
          </button>
        ))
      ) : (
        <span>No bordering countries</span>
      )}
    </div>
  );
};

export default BorderCountries;
