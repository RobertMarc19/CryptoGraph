import React, {useState} from 'react';
import CryptoSelector from './components/CryptoDropdown';
import TimeSelector from './components/TimePeriodDropdown';
import PriceChart from './components/PriceGraph';
import TopFive from './components/TopFive';

function App() {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [selectedTime, setSelectedTime] = useState("1");
  
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Crypto Graph</h1>
      <CryptoSelector selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin} />
      <TimeSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <PriceChart selectedCoin={selectedCoin} selectedTime={selectedTime} />
      <TopFive selectedTime={selectedTime} />
    </div>
  )
}

export default App;