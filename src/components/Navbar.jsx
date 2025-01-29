import { FaHome, FaTasks, FaCog, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const isAdmin = () => {
  return true; 
};

const Navbar = () => (
  <div className="bg-white shadow-md flex flex-col md:flex-row items-center justify-between p-4">
    <div className="flex items-center w-full md:w-auto">
      <h1 className="text-2xl text-gray-700 font-bold mr-4">Task Management</h1>
      <div className="flex space-x-4 md:hidden">
        <Link to="/" className="flex items-center text-gray-700 hover:text-gray-900">
          <FaHome className="mr-2" /> Home
        </Link>
        <Link to="/tasks" className="flex items-center text-gray-700 hover:text-gray-900">
          <FaTasks className="mr-2" /> Tasks
        </Link>
        {isAdmin() && (
          <Link to="/settings" className="flex items-center text-gray-700 hover:text-gray-900">
            <FaCog className="mr-2" /> Settings
          </Link>
        )}
      </div>
      <FaBell className="ml-4 text-gray-500 md:hidden" />
    </div>
    <div className="hidden md:flex md:space-x-4">
      <Link to="/" className="flex items-center text-gray-700 hover:text-gray-900">
        <FaHome className="mr-2" /> Home
      </Link>
      <Link to="/tasks" className="flex items-center text-gray-700 hover:text-gray-900">
        <FaTasks className="mr-2" /> Tasks
      </Link>
      {isAdmin() && (
        <Link to="/settings" className="flex items-center text-gray-700 hover:text-gray-900">
          <FaCog className="mr-2" /> Settings
        </Link>
      )}
    </div>
  </div>
);

export default Navbar;
