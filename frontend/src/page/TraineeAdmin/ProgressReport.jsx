import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import AnalyticalCard from './AnalyticalCard';

const ProgressReport = () => {
  // Dummy data for calories burnt vs days
  const caloriesData = [
    { day: 'Day 1', calories: 200 },
    { day: 'Day 2', calories: 180 },
    { day: 'Day 3', calories: 220 },
    { day: 'Day 4', calories: 250 },
    { day: 'Day 5', calories: 230 },
  ];

  // Dummy data for exercise type vs reps
  const exerciseRepsData = [
    { exercise: 'Squats', reps: 10 },
    { exercise: 'Push-ups', reps: 15 },
    { exercise: 'Plank', reps: 30 },
    { exercise: 'Lunges', reps: 12 },
    { exercise: 'Sit-ups', reps: 20 },
  ];

  // Dummy data for exercise type vs average time spent
  const exerciseTimeData = [
    { exercise: 'Squats', avgTime: 15 },
    { exercise: 'Push-ups', avgTime: 20 },
    { exercise: 'Plank', avgTime: 25 },
    { exercise: 'Lunges', avgTime: 18 },
    { exercise: 'Sit-ups', avgTime: 22 },
  ];

  // Dummy data for pie chart of time spent in between rest and exercise
  const timeSpentData = [
    { name: 'Exercise', value: 75 },
    { name: 'Rest', value: 25 },
  ];

  // Dummy data for projected weight vs actual weight over months
  const weightData = [
    { month: 'Jan', projectedWeight: 70, actualWeight: 68 },
    { month: 'Feb', projectedWeight: 68, actualWeight: 67 },
    { month: 'Mar', projectedWeight: 67, actualWeight: 66 },
    { month: 'Apr', projectedWeight: 66, actualWeight: 65 },
    { month: 'May', projectedWeight: 65, actualWeight: 64 },
  ];

  // Colors for the pie chart
  const COLORS = ['#60A5FA', '#F87171'];

  return (
    <div className="">
    <div className="container mx-auto px-4 mt-40 ">
      <h1 className="text-2xl font-bold mb-4">Progress Report</h1>

      <div className="grid grid-cols-2 gap-8">
        {/* Calories Burnt vs Days */}
        <div className="my-20">
          <h2 className="text-lg font-bold mb-2">Calories Burnt vs Days</h2>
          <LineChart width={500} height={300} data={caloriesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="calories" stroke="#60A5FA" />
          </LineChart>
        </div>

        {/* Exercise Type vs Reps */}
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-2">Exercise Type vs Reps</h2>
          <BarChart width={500} height={300} data={exerciseRepsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="exercise" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="reps" fill="#F87171" />
          </BarChart>
        </div>

        {/* Exercise Type vs Average Time Spent */}
        <div className="">
          <h2 className="text-lg font-bold mb-2">Exercise Type vs Average Time Spent</h2>
          <BarChart width={400} height={300} data={exerciseTimeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="exercise" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="avgTime" fill="#34D399" />
          </BarChart>
        </div>

        {/* Pie Chart of Time Spent */}
        <div className="">
          <h2 className="text-lg font-bold mb-2">Time Spent (Exercise vs Rest)</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={timeSpentData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {timeSpentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Projected Weight vs Actual Weight */}
        <div className="">
          <h2 className="text-lg font-bold mb-2">Projected Weight vs Actual Weight over Months</h2>
          <LineChart width={600} height={400} data={weightData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="projectedWeight" stroke="#8884d8" />
            <Line type="monotone" dataKey="actualWeight" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* Summary */}
        
      </div>
      <div className="my-20">
        <AnalyticalCard/>
      </div>
      

      
    </div>  
    </div>
    );
};

export default ProgressReport;
