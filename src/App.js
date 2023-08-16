import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import { TranslationProvider } from "./components/Search/TranslationContext";
// import MyModal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <TranslationProvider>
        <div className="header">
          <div className="container">
            <h5>Countries App</h5>
          </div>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<AllCountries />} />
            <Route path="/country/:countryName" element={<CountryInfo />} />
          </Routes>
        </div>
      </TranslationProvider>
    </>
  );
}

export default App;
