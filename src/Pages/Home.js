import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";

function Home() {
  const [citySearched, setCitySearched] = useState("");
  const [getWeather, { loading, data, error }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: { name: "Vancouver" },
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
    </div>
  );
}

export default Home;
