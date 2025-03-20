import React from "react";

const CryptoSelector = ({ selectedCoin, setSelectedCoin }) => {
  const coins = ["bitcoin", "ethereum", "ripple", "litecoin", "dogecoin"];
  return (
    <select
      value={selectedCoin}
      onChange={(e) => setSelectedCoin(e.target.value)}
      className="text-sm p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white shadow-sm"
    >
      {coins.map((coin) => (
        <option key={coin} value={coin}>
          {coin.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default CryptoSelector;
