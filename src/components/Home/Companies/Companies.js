import React, { useState } from "react";
import "./Companies.css";

import designless from "../../../assets/images/companies/designless.svg";
import nonsense from "../../../assets/images/companies/nonsense.svg";
import productHunt from "../../../assets/images/companies/productHunt.svg";
import techCrunch from "../../../assets/images/companies/techCrunch.svg";
import tnw from "../../../assets/images/companies/tnw.svg";

function Companies() {
  const [companies, setCompanies] = useState([
    productHunt,
    nonsense,
    designless,
    tnw,
    techCrunch,
  ]);
  return (
    <div className="companies">
      <p className="companies__heading">
        Our Students works <span>50+ leading Companies such as</span>
      </p>
      <div className="companies__list">
        {companies.map((company) => (
          <img src={company} alt="partner company logo" />
        ))}
      </div>
    </div>
  );
}

export default Companies;
