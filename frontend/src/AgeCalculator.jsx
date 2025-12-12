import React, { useState } from 'react';

// --- Core Calculation Logic (Accurate and Rounded to Nearest Month) ---
const calculateAgeInMonths = (birthDate, weighingDate) => {
  // Convert inputs to Date objects for calculation
  const start = new Date(birthDate);
  const end = new Date(weighingDate);

  // Check if dates are valid and in the correct order
  if (!start || !end || start > end) {
    // Return 0 or handle error if input is invalid
    return 0; 
  }

  // 1. Calculate the raw difference in years, months, and days
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  // 2. Adjust months and years if the weighing day is before the birth day
  if (days < 0) {
    // Precisely find the number of days in the PREVIOUS month of the end date
    const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    const daysInLastMonth = lastMonth.getDate(); 

    // Add those days and subtract a month
    days = days + daysInLastMonth;
    months = months - 1;
  }

  // 3. Adjust years if the months calculation is negative
  if (months < 0) {
    months += 12; 
    years -= 1;   
  }
  
  // 4. Calculate the total full months
  const totalMonths = (years * 12) + months;
  
  // Calculate the precise denominator: actual days in the CURRENT weighing month
  const daysInCurrentMonth = new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();
  
  // Calculate the fraction of the current month
  const monthFraction = days / daysInCurrentMonth;

  // The precise age (e.g., 64.77)
  const preciseAge = totalMonths + monthFraction;
  
  // 5. Return the result rounded to the nearest whole number (64.77 -> 65)
  return Math.round(preciseAge); 
};


// --- React Component (Using Class Names from the CSS file) ---
const AgeCalculator = () => {
  // Set initial dates to match your example for demonstration
  const [birthDate, setBirthDate] = useState('2020-07-28');
  const [weighingDate, setWeighingDate] = useState('2025-12-21');
  const [ageInMonths, setAgeInMonths] = useState(null);

  const handleCalculate = () => {
    const result = calculateAgeInMonths(birthDate, weighingDate);
    setAgeInMonths(result);
  };

  return (
    <div className="age-calculator-container">
      <h2 className="calculator-title">👶 Rounded Age in Months</h2>

      <div className="input-group">
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="date-input"
        />
      </div>

      <div className="input-group">
        <label htmlFor="weighing">Date of Weighing:</label>
        <input
          type="date"
          id="weighing"
          value={weighingDate}
          onChange={(e) => setWeighingDate(e.target.value)}
          className="date-input"
        />
      </div>

      <button onClick={handleCalculate} className="calculate-button">
        Calculate Rounded Age
      </button>

      {ageInMonths !== null && (
        <div className="result-box">
          <h3 className="result-heading">Calculation Result:</h3>
          <p className="result-value">
            {ageInMonths} months
          </p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;