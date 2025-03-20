import React, { useEffect, useState } from "react";
import axios from "axios";

const TopFive = ({ selectedTime }) => {
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);

  useEffect(() => {
    const fetchTopFive = async () => {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1";
      const response = await axios.get(url);

      const sortedData = response.data.sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
      );
      setTopGainers(sortedData.slice(0, 5));
      setTopLosers(sortedData.slice(-5));
    };
    fetchTopFive();
  }, [selectedTime]);
  return (
  <div>
    <h3>Top 5 Growing Crypto</h3>
    <ul>
      {topGainers.map((coin) => (
        <li key={coin.id}>
          {coin.name} ({coin.price_change_percentage_24h.toFixed(2)}%)
        </li>
      ))}
    </ul>

    <h3>Top 5 Shrinking Crypto</h3>
    <ul>
        {topLosers.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.price_change_percentage_24h.toFixed(2)}%)
          </li>
        ))}
    </ul>
  </div>
);
};

export default TopFive;
