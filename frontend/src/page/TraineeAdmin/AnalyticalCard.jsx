import React from 'react';

const AnalyticalCard = () => {
  // Dummy data for summary digits
  const caloriesBurnt = 1200;
  const totalReps = 350;
  const avgTimeSpent = 45;
  const restTime = 20;
  const exerciseTime = 80;
  const projectedWeight = 65;
  const actualWeight = 63;

  return (
    <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Summary</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center bg-blue-600 py-4 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">{caloriesBurnt}</h3>
          <p>Calories Burnt</p>
        </div>
        <div className="text-center bg-purple-600 py-4 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">{totalReps}</h3>
          <p>Total Reps</p>
        </div>
        <div className="text-center bg-green-600 py-4 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">{avgTimeSpent}</h3>
          <p>Average Time Spent (mins)</p>
        </div>
        <div className="text-center bg-yellow-600 py-4 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">{restTime}</h3>
          <p>Rest Time (mins)</p>
        </div>
        <div className="text-center bg-red-600 py-4 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">{exerciseTime}</h3>
          <p>Exercise Time (mins)</p>
        </div>
        <div className="text-center bg-indigo-600 py-4 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">{projectedWeight}</h3>
          <p>Projected Weight (kg)</p>
        </div>
        <div className="text-center col-span-3 bg-gray-600 py-4 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">{actualWeight}</h3>
          <p>Actual Weight (kg)</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticalCard;
