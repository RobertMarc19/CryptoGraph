import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip
);

const PriceChart = ({ selectedCoin, selectedTime }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=${selectedTime}`;
      const response = await axios.get(url);
      const prices = response.data.prices.map((p) => ({
        x: new Date(p[0]),
        y: p[1],
      }));

      setChartData({
        labels: prices.map((p) => p.x.toLocaleDateString()),
        datasets: [
          {
            label: `Price of ${selectedCoin.toUpperCase()} (USD)`,
            data: prices.map((p) => p.y),
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.1)",
          },
        ],
      });
    };
    fetchData();
  }, [selectedCoin, selectedTime]);
  return chartData ? <Line data={chartData} /> : <p>Loading...</p>;
};

export default PriceChart;
