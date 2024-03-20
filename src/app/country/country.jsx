"use client";
import React, { useEffect, useState } from "react";

export default function Country() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "553|UgsZByghCuETcdTVJYdWl3epZvCEqdYsjM4CQg1C";
        const apiUrl = "https://restfulcountries.com/api/v1/countries";
        const headers = {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        };

        const response = await fetch(apiUrl, { headers });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        setCountry(data.data); // Assuming data is an array of countries
        console.log(data.data[0].name);
        console.log(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []); // Dependency array

  return (
    <div>
      {country.length > 0 ? (
        country.map((countryInfo, index) => (
          <div key={index}>
            <p>{countryInfo.name}</p>
            {/* Render other country information here */}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
