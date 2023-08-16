import React, { useState, useEffect } from "react";
import SearchInput from "../Search/SearchInput";
import SearchLang from "../Search/SearchLang";
import { apiURL } from "../util/api";
import Modal from "react-modal";
import CountryInfo from "../CountryInfo/CountryInfo";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '50%',
    height: '60%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'gray',
  },
};

const AllCountries = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [countries, setCountries] = useState([]);

  const openModal = (country) => {
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setSelectedCountry(null);
    setIsModalOpen(false);
  };
  const getAllCountries = async () => {
    try {
      const res = await fetch(`${apiURL}/all`);

      if (!res.ok) throw new Error("Something went wrong!");

      const data = await res.json();

      console.log(data);

      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${apiURL}/name/${countryName}`);

      if (!res.ok) throw new Error("Not found any country!");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const setLanguage = async (langName) => {
    try {
      const res = await fetch(`${apiURL}/lang/${langName}`);

      if (!res.ok) throw new Error("Failed..........");

      const data = await res.json();
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);
  return (
    <div className="all__country__wrapper">
      <div className="country__top">
        <div className="search">
          <SearchInput onSearch={getCountryByName} />
        </div>

        <div className="search">
          <SearchLang onSearch={setLanguage} />
        </div>

      </div>

      <div className="country__bottom ">
        {isLoading && !error && <h4>Loading........</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {countries?.map((country) => {console.log('finally',country);
         return(
            <div className="country__card"
              onClick={() => openModal(country)}
              key={country.name.common}
            >
              
              <div className="country__img">
                <img src={country.flags.png} alt="" />
              </div>

              <div className="country__data">
                <h3>{country.name.common}</h3> 
              </div>

            </div>
        )})}
      </div>
      <Modal isOpen={selectedCountry} style={customStyles} countryName={selectedCountry?.name?.common}>
          <div>
            <button onClick={closeModal}>Close</button>
            <CountryInfo country={selectedCountry} />
          </div>
      </Modal>
    </div>
  );
};

export default AllCountries;