import React from 'react';
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "./graphql/Queries";

function Home(){
    return (
        <div className="home">
            <h2>Search the Weather</h2>
            <input type="text" placeholder="City Name"/>
            <button>Search</button>
        </div>
    );
};


export default Home;
