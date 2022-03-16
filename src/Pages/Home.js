import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

function Home() {
  const [citySearched, setCitySearched] = useState("");
  const [getWeather, { loading, data, error }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: { name: citySearched },
    }
  );

  if (error) return <h1>Error found</h1>;
  if (data) {
    console.log(data);
  }

  return (
    <div className="home">
      <h2>Search the Weather</h2>
      <input
        type="text"
        placeholder="City Name"
        onChange={(event) => {
          setCitySearched(event.target.value);
        }}
      />
      <button onClick={() => getWeather()}>Search</button>
      <div className="weather">
          <h1>City Name</h1>
          <h1>Temperature</h1>
          <h1>Description</h1>
          <h1>Wind</h1>
      </div>
    </div>
  );
}

export default Home;
