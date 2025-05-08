'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TranscriptPage = () => {
  const gradesData = {
    labels: ['B-','B','B+','A-','A','A+'],
    datasets: [
      {
        label: 'Number of Classes',
        data: [2, 3, 5, 6, 24, 21],
        backgroundColor: 'rgba(88, 92, 52, 0.6)',
        borderColor: 'rgba(88, 92, 52, 0.6)',
        borderWidth: 1,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: false, // This removes the title
      },
      legend: {
        display: false, // This removes the legend
      },
    },
    scales: {
      y: {
        display: false, // This removes the Y-axis
        grid: {
          display: false, // Disable the grid lines on the Y-axis
        },
      },
      x: {
        ticks: {
          padding: 10, // Adds spacing between the labels and the chart
        },
        grid: {
          display: false, // Disable the grid lines on the X-axis
        },
      },
    },
    layout: {
      padding: {
        left: 20, // Adds spacing around the chart
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  };

  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 text-center">Transcript & Grades</h1>

        {/* GPA and Credits Information */}
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold text-amber-800 mb-6 text-center">GPA & Credits</h2>
            <div className="space-y-10">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-amber-700">Total Credits</h3>
                <p className="text-2xl text-gray-700">184 credits</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-amber-700">Undergrad GPA</h3>
                <p className="text-2xl text-gray-700">3.91</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-amber-700">Grad GPA</h3>
                <p className="text-2xl text-gray-700">3.97</p>
              </div>
            </div>
          </div>

          {/* Data visualization (Bar chart) */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <h2 className="text-3xl font-semibold text-amber-800 mb-4 text-center">Grade Distribution</h2>
            <div className="max-w-full mx-auto">
              {/* Ensure you pass chartOptions properly */}
              <Bar data={gradesData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Embed Transcript PDF */}
        <h2 className="text-2xl font-semibold text-amber-800 mb-4 text-center">Transcript</h2>
        <object
          data="/files/transcript.pdf"
          type="application/pdf"
          width="100%"
          height="800px"
        >
          <p>Your browser does not support PDFs. Please download the PDF to view it: <a href="/files/transcript.pdf">Download Transcript</a>.</p>
        </object>
      </div>
    </main>
  );
};

export default TranscriptPage;