import { FaTasks, FaClock, FaCheckCircle, FaDollarSign } from 'react-icons/fa';
import { Line, Bar } from 'react-chartjs-2';
import { FaPersonHarassing } from "react-icons/fa6";

import 'chart.js/auto';

const dateWiseData = {
  labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    label: 'Tasks Completed',
    data: [45, 60, 55, 50, 70, 65, 80],
    borderColor: 'rgba(75,192,192,1)',
    backgroundColor: 'rgba(75,192,192,0.2)',
  }]
};

const performanceData = {
  labels: ['Excellent', 'Super', 'Average', 'Not Good'],
  datasets: [{
    label: 'Task Performance',
    data: [60, 25, 10, 5],
    backgroundColor: [
      'rgba(54,162,235,0.2)',
      'rgba(255,206,86,0.2)',
      'rgba(255,159,64,0.2)',
      'rgba(255,99,132,0.2)'
    ],
    borderColor: [
      'rgba(54,162,235,1)',
      'rgba(255,206,86,1)',
      'rgba(255,159,64,1)',
      'rgba(255,99,132,1)'
    ],
    borderWidth: 1
  }]
};

function HomePage() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
        <img
          src="https://via.placeholder.com/80" // Profile image placeholder
          alt="Profile"
          className="w-20 h-20 rounded-full mb-4 md:mb-0 md:mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">John Doe</h1>
          <p className="text-gray-600">Email: john.doe@example.com</p>
        </div>
        <div className="ml-auto mt-4 md:mt-0 flex items-center">
          <div className="flex items-center p-3 bg-gray-100 rounded-lg">
            <FaDollarSign className="text-xl text-gray-600 mr-2" />
            <div>
              <p className="text-xl font-bold">500</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="relative flex items-center p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition">
          <FaTasks className="text-xl text-gray-600 mr-2" />
          <div>
            <p className="text-xl font-bold">120</p>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-gray-300 rounded-lg">
              <p className="text-lg font-semibold">Total Tasks</p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition">
          <FaClock className="text-xl text-gray-600 mr-2" />
          <div>
            <p className="text-xl font-bold">350 hrs</p>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-gray-300 rounded-lg">
              <p className="text-lg font-semibold">Total Hours</p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition">
          <FaCheckCircle className="text-xl text-gray-600 mr-2" />
          <div>
            <p className="text-xl font-bold">100</p>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-gray-300 rounded-lg">
              <p className="text-lg font-semibold">Completed Tasks</p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition">
          <FaPersonHarassing className="text-xl text-gray-600 mr-2" />
          <div>
            <p className="text-xl font-bold">60</p>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-gray-300 rounded-lg">
              <p className="text-lg font-semibold">Assinged Tasks</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Date Wise Tasks Completed</h2>
          <Line data={dateWiseData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Task Performance</h2>
          <Bar data={performanceData} />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Team Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Group Lead</h3>
            <p className="text-gray-600">Alex Johnson</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Team Lead</h3>
            <p className="text-gray-600">Emily Davis</p>
          </div>
          <div className="p-3 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Project Lead</h3>
            <p className="text-gray-600">Michael Brown</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
