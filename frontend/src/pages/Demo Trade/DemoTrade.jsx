import React from 'react';
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DemoTrade.css';

// Import images correctly
import bank from '../../assets/bank.jpg';
import hydropower from '../../assets/hydropower.jpg';
import insurance from '../../assets/insurance.png';
import manufacturing from '../../assets/manf.jpg';
import mutualFunds from '../../assets/fund.jpg';
import hotels from '../../assets/hotel.webp';

// Sample data for the chart
const data = [
  { date: 'Aug 2016', Banking: 10, Hydropower: 15 },
  { date: 'Jan 2017', Banking: 5, Hydropower: 20 },
  { date: 'Jun 2018', Banking: 15, Hydropower: 22 },
  { date: 'Oct 2019', Banking: 30, Hydropower: 32 },
  { date: 'Mar 2020', Banking: 35, Hydropower: 37 },
  { date: 'Aug 2021', Banking: 40, Hydropower: 45 },
  { date: 'Jan 2022', Banking: 50, Hydropower: 60 },
  { date: 'Jun 2023', Banking: 60, Hydropower: 75.1 },
];

const stocks = [
  { id: 1, name: 'Nepal Bank Limited', symbol: 'NBL', price: 350 },
  { id: 2, name: 'Nabil Bank Limited', symbol: 'NABIL', price: 1200 },
  { id: 3, name: 'Nepal Investment Bank Limited', symbol: 'NIBL', price: 450 },
  { id: 4, name: 'Standard Chartered Bank Nepal Limited', symbol: 'SCB', price: 800 },
  { id: 5, name: 'Himalayan Bank Limited', symbol: 'HBL', price: 650 },
  { id: 6, name: 'Nepal SBI Bank Limited', symbol: 'NSBI', price: 400 },
  { id: 7, name: 'Nepal Life Insurance Co. Ltd.', symbol: 'NLIC', price: 1500 },
  { id: 8, name: 'Everest Bank Limited', symbol: 'EBL', price: 700 },
  { id: 9, name: 'NMB Bank Limited', symbol: 'NMB', price: 380 },
  { id: 10, name: 'Global IME Bank Limited', symbol: 'GBIME', price: 330 },
  { id: 11, name: 'Machhapuchhre Bank Limited', symbol: 'MBL', price: 300 },
  { id: 12, name: 'Laxmi Bank Limited', symbol: 'LBL', price: 280 },
  { id: 13, name: 'Kumari Bank Limited', symbol: 'KBL', price: 250 },
  { id: 14, name: 'Sanima Bank Limited', symbol: 'SANIMA', price: 370 },
  { id: 15, name: 'Prabhu Bank Limited', symbol: 'PRBU', price: 320 },
];

// Sample data for top sectors in the stock market
const sectors = [
  { name: 'Banking', img: bank, link: '/banking' },
  { name: 'Hydropower', img: hydropower, link: '/hydropower' },
  { name: 'Insurance', img: insurance, link: '/insurance' },
  { name: 'Manufacturing', img: manufacturing, link: '/manufacturing' },
  { name: 'Mutual Funds', img: mutualFunds, link: '/mutualfunds' },
  { name: 'Hotels & Tourism', img: hotels, link: '/hotels' },
];

const DemoTrade = () => {
  // Load balance from localStorage or use default
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem('balance');
    return savedBalance ? parseFloat(savedBalance) : 100000;
  });

  const [portfolio, setPortfolio] = useState({});
  const [stockPrices, setStockPrices] = useState(stocks);

  // Save balance to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('balance', balance);
  }, [balance]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStockPrices(prevPrices =>
        prevPrices.map(stock => ({
          ...stock,
          price: Math.max(1, stock.price + Math.floor(Math.random() * 21) - 10)
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const buyStock = (stockId) => {
    const stock = stockPrices.find(s => s.id === stockId);
    if (balance >= stock.price) {
      setBalance(prevBalance => prevBalance - stock.price * 10);
      setPortfolio(prevPortfolio => ({
        ...prevPortfolio,
        [stockId]: (prevPortfolio[stockId] || 0) + 10
      }));
    } else {
      alert("Insufficient funds!");
    }
  };

  const sellStock = (stockId) => {
    if (portfolio[stockId] > 0) {
      const stock = stockPrices.find(s => s.id === stockId);
      setBalance(prevBalance => prevBalance + stock.price * 10);
      setPortfolio(prevPortfolio => ({
        ...prevPortfolio,
        [stockId]: prevPortfolio[stockId] - 10
      }));
    } else {
      alert("You don't own this stock!");
    }
  };

  return (
    <div className="chart-container">
      <div>
        <h1>Nepali Stock Trader</h1>
        <h2>Balance: NPR {balance.toFixed(2)}</h2>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price (NPR)</th>
              <th>Owned</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stockPrices.map(stock => (
              <tr key={stock.id}>
                <td>{stock.symbol}</td>
                <td>{stock.name}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{portfolio[stock.id] || 0}</td>
                <td>
                  <button id="buy" onClick={() => buyStock(stock.id)}>Buy</button>
                  <button id="sell" onClick={() => sellStock(stock.id)}>Sell</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Banking vs Hydropower</h2>
      <h3>Between 2016 and 2023</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 80]} ticks={[0, 20, 40, 60, 80]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Banking" stroke="#82ca9d" dot={false} />
          <Line type="monotone" dataKey="Hydropower" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>

      <h2 className="sectors-heading">Top Share Sectors in Nepal</h2>

      <div className="sectors-container">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="sector-card"
            onClick={() => window.location.href = sector.link}
          >
            <img src={sector.img} alt={sector.name} />
            <div className="sector-name">{sector.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoTrade;
