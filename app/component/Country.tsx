import {CountryComponentProps} from "@/type/type";

function CountryComponent({ countryInfo, url }: CountryComponentProps) {
  return (
    <div>
      {countryInfo ? (
        <div>
          <h1>Country Name: {countryInfo.name}</h1>
          <h1>Capital: {countryInfo.capital}</h1>
          <h1>Population: {countryInfo.population.toLocaleString()}</h1>
        </div>
      ) : (
        <div>
          <h1>{url} Not Found</h1>
        </div>
      )}
    </div>
  );
}

export default CountryComponent;



