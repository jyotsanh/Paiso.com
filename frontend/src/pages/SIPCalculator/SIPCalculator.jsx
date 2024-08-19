import React, { useState } from 'react';
import './sip.css';

const SIPCalculator = () => {
  const [investmentType, setInvestmentType] = useState('Monthly');
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [annualReturnRate, setAnnualReturnRate] = useState(10);
  const [years, setYears] = useState(5);
  const [futureValue, setFutureValue] = useState(null);

  const calculateSIP = () => {
    let periodsPerYear;
    switch (investmentType) {
      case 'Monthly':
        periodsPerYear = 12;
        break;
      case 'Quarterly':
        periodsPerYear = 4;
        break;
      case 'Semi-Annually':
        periodsPerYear = 2;
        break;
      case 'Annually':
        periodsPerYear = 1;
        break;
      default:
        periodsPerYear = 12;
    }

    const periodRate = (annualReturnRate / periodsPerYear) / 100;
    const totalPeriods = years * periodsPerYear;
    const futureValue =
      (monthlyInvestment * (Math.pow(1 + periodRate, totalPeriods) - 1) / periodRate) *
      (1 + periodRate);

    setFutureValue(futureValue.toFixed(2));
  };

  const totalInvestedAmount = monthlyInvestment * years * (investmentType === 'Monthly' ? 12 : investmentType === 'Quarterly' ? 4 : investmentType === 'Semi-Annually' ? 2 : 1);

  return (
    <div className="cal-container">
      <h1 className="cal-heading"><b>Calculate SIP Mutual Fund Returns</b></h1>
      <p className="cal-description">Use this calculator to estimate your future wealth based on regular investments over time.</p>
      <div className="cal-options">
        {['Monthly', 'Annually', 'Semi-Annually', 'Quarterly'].map(type => (
          <label key={type} className="cal-radioLabel">
            <input
              type="radio"
              value={type}
              checked={investmentType === type}
              onChange={(e) => setInvestmentType(e.target.value)}
            />
            {type}
          </label>
        ))}
      </div>

      <div className="cal-inputGroup">
        <label>Monthly investment amount (Rs): </label>
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
          className="cal-input"
        />
      </div>

      <div className="cal-inputGroup">
        <label>Expected Annual Return (%): </label>
        <input
          type="number"
          value={annualReturnRate}
          onChange={(e) => setAnnualReturnRate(Number(e.target.value))}
          className="cal-input"
        />
      </div>

      <div className="cal-inputGroup">
        <label>Years: </label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="cal-input"
        />
      </div>

      <button onClick={calculateSIP} className="cal-calculateButton">Calculate</button>

      {futureValue && (
        <div className="cal-results">
          <p className="cal-investedAmount">Invested Amount: ₹ {totalInvestedAmount}</p>
          <p className="cal-futureValue">Resultant Amount: ₹ {futureValue}</p>
        </div>
      )}
    </div>
  );
};

const SavingsGoalCalculator = () => {
  const [goalAmount, setGoalAmount] = useState(100000);
  const [years, setYears] = useState(10);
  const [annualReturnRate, setAnnualReturnRate] = useState(5);
  const [requiredInvestment, setRequiredInvestment] = useState(null);

  const calculateSavingsGoal = () => {
    const futureValueFactor = Math.pow(1 + annualReturnRate / 100, years);
    const requiredInvestment = goalAmount / futureValueFactor;
    setRequiredInvestment(requiredInvestment.toFixed(2));
  };

  return (
    <div className="cal-container">
      <h1 className="cal-heading"><b>Savings Goal Calculator</b></h1>
      <p className="cal-description">Determine how much you need to save regularly to reach your financial goals.</p>
      <div className="cal-inputGroup">
        <label>Goal Amount (Rs): </label>
        <input
          type="number"
          value={goalAmount}
          onChange={(e) => setGoalAmount(Number(e.target.value))}
          className="cal-input"
        />
      </div>

      <div className="cal-inputGroup">
        <label>Years to Achieve Goal: </label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="cal-input"
        />
      </div>

      <div className="cal-inputGroup">
        <label>Expected Annual Return (%): </label>
        <input
          type="number"
          value={annualReturnRate}
          onChange={(e) => setAnnualReturnRate(Number(e.target.value))}
          className="cal-input"
        />
      </div>

      <button onClick={calculateSavingsGoal} className="cal-calculateButton">Calculate</button>

      {requiredInvestment && (
        <div className="cal-results">
          <p className="cal-futureValue">Required Monthly Investment: ₹ {requiredInvestment}</p>
        </div>
      )}
    </div>
  );
};

const InsuranceCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState(500000);
  const [insuranceCover, setInsuranceCover] = useState(null);

  const calculateInsurance = () => {
    const recommendedCover = annualIncome * 10;
    setInsuranceCover(recommendedCover.toFixed(2));
  };

  return (
    <div className="cal-container">
      <h1 className="cal-heading"><b>Insurance Calculator</b></h1>
      <p className="cal-description">Calculate how much life insurance coverage you need to protect your loved ones.</p>
      <div className="cal-inputGroup">
        <label>Annual Income (Rs): </label>
        <input
          type="number"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(Number(e.target.value))}
          className="cal-input"
        />
      </div>

      <button onClick={calculateInsurance} className="cal-calculateButton">Calculate</button>

      {insuranceCover && (
        <div className="cal-results">
          <p className="cal-futureValue">Recommended Insurance Cover: ₹ {insuranceCover}</p>
        </div>
      )}
    </div>
  );
};

const ProfitMarginCalculator = () => {
  const [costPrice, setCostPrice] = useState(100);
  const [sellingPrice, setSellingPrice] = useState(150);
  const [profitMargin, setProfitMargin] = useState(null);

  const calculateProfitMargin = () => {
    const profit = sellingPrice - costPrice;
    const margin = (profit / sellingPrice) * 100;
    setProfitMargin(margin.toFixed(2));
  };

  return (
    <div className="cal-container">
      <h1 className="cal-heading"><b>Profit Margin Calculator</b></h1>
      <p className="cal-description">Calculate the profit margin of your products to make informed pricing decisions.</p>
      <div className="cal-inputGroup">
        <label>Cost Price (Rs): </label>
        <input
          type="number"
          value={costPrice}
          onChange={(e) => setCostPrice(Number(e.target.value))}
          className="cal-input"
        />
      </div>

      <div className="cal-inputGroup">
        <label>Selling Price (Rs): </label>
        <input
          type="number"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(Number(e.target.value))}
          className="cal-input"
        />
      </div>

      <button onClick={calculateProfitMargin} className="cal-calculateButton">Calculate</button>

      {profitMargin && (
        <div className="cal-results">
          <p className="cal-futureValue">Profit Margin: {profitMargin}%</p>
        </div>
      )}
    </div>
  );
};

const Calculators = () => {
  return (
    <div>
      <SIPCalculator />
      <SavingsGoalCalculator />
      <InsuranceCalculator />
      <ProfitMarginCalculator />
    </div>
  );
};

export default Calculators;
