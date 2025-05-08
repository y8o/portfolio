// components/TranscriptTabs.tsx
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const TranscriptTabs = () => {
  const [credits, setCredits] = useState(120); // total credits
  const [undergradCredits, setUndergradCredits] = useState(80);
  const [gradCredits, setGradCredits] = useState(40);

  const [totalGPA, setTotalGPA] = useState(3.75);
  const [undergradGPA, setUndergradGPA] = useState(3.5);
  const [gradGPA, setGradGPA] = useState(4.0);

  const [grades, setGrades] = useState({
    'A+': 5,
    'A': 3,
    'A-': 2,
    'B+': 1,
    'B': 1,
    'B-': 0,
  });

  const gradeLabels = ['A+', 'A', 'A-', 'B+', 'B', 'B-'];
  const gradeCounts = Object.values(grades);

  // Bar chart data
  const chartData = {
    labels: gradeLabels,
    datasets: [
      {
        label: 'Number of Classes',
        data: gradeCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex space-x-4">
      {/* Left tab */}
      <div className="w-1/3 p-4 bg-amber-100 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Transcript Info</h2>
        <div className="mb-4">
          <div>
            <strong>Total Credits: </strong>{credits}
          </div>
          <div>
            <strong>Undergrad Credits: </strong>{undergradCredits}
          </div>
          <div>
            <strong>Grad Credits: </strong>{gradCredits}
          </div>
        </div>

        <div className="mb-4">
          <strong>Total GPA: </strong>{totalGPA} ({undergradGPA} undergrad, {gradGPA} grad)
        </div>

        <div className="mb-4">
          <strong>Grad GPA: </strong>{gradGPA}
        </div>

        <div className="mb-4">
          <strong>Undergrad GPA: </strong>{undergradGPA}
        </div>
      </div>

      {/* Bar chart */}
      <div className="w-2/3 p-4 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Grade Distribution</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default TranscriptTabs;
