export type CountryDetails = {
    name: string;
    capital: string;
    population: string;
}

  export type CountryComponentProps =  {
    countryInfo?: CountryDetails; 
    url: string;
  }