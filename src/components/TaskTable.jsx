import { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Sample candidates for dropdown
const candidates = ['John Doe', 'Jane Smith', 'Emily Davis'];

const initialTasks = [
  {
    sl: 1,
    taskName: 'Task 1',
    candidate: 'John Doe',
    hours: 5,
    productName: 'Product A',
    startDate: new Date('2024-07-20'),
    endDate: new Date('2024-07-25'),
    teamLeadApproval: 'Completed',
    projectLeadApproval: 'In Progress',
    comment: 'Some comments here',
  },
  // Add more tasks here
];

const statusFilters = ['All', 'Completed', 'In Progress', 'Not Started'];
const roles = ['Candidate', 'Team Lead', 'Project Lead'];

const TaskTable = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [role, setRole] = useState('Candidate'); // Default role for testing

  const filteredTasks = tasks.filter(task => {
    const nameMatch = task.taskName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                      task.productName.toLowerCase().includes(searchTerm.toLowerCase());
    const statusMatch = statusFilter === 'All' || 
                        task.projectLeadApproval === statusFilter || 
                        task.teamLeadApproval === statusFilter;
    return nameMatch && statusMatch;
  });

  const handleEdit = (index, field, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], [field]: value };
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    const newTask = {
      sl: tasks.length + 1,
      taskName: '',
      candidate: candidates[0],
      hours: 0,
      productName: '',
      startDate: new Date(),
      endDate: new Date(),
      teamLeadApproval: 'Not Started',
      projectLeadApproval: 'Not Started',
      comment: '',
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Role Selector for Testing */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Select Role:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          {roles.map(r => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <div className="relative flex-grow mr-4 mb-2 md:mb-0">
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name or product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="relative">
            <FaFilter className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              {statusFilters.map(status => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-200 border-b border-gray-300 hidden md:table-header-group">
              <tr>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold">SL</th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold">Task Name</th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold">Candidate</th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold">Hours</th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold">Product Name</th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold">Start Date</th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold">End Date</th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold">Team Lead Approval</th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold">Project Lead Approval</th>
                <th className="px-4 py-3 text-left text-gray-600 font-semibold">Comment</th>
                {role === 'Team Lead' && (
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">Edit</th>
                )}
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task, index) => (
                <tr
                  key={task.sl}
                  className="hover:bg-gray-100 transition-colors duration-200 md:table-row"
                >
                  <td className="px-4 py-3 border-b border-gray-200">{task.sl}</td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    {role === 'Project Lead' || role === 'Team Lead' ? (
                      <input
                        type="text"
                        value={task.taskName}
                        onChange={(e) => handleEdit(index, 'taskName', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    ) : (
                      task.taskName
                    )}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    {role === 'Project Lead' || role === 'Team Lead' ? (
                      <select
                        value={task.candidate}
                        onChange={(e) => handleEdit(index, 'candidate', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      >
                        {candidates.map(candidate => (
                          <option key={candidate} value={candidate}>
                            {candidate}
                          </option>
                        ))}
                      </select>
                    ) : (
                      task.candidate
                    )}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    {role === 'Project Lead' || role === 'Team Lead' ? (
                      <input
                        type="number"
                        value={task.hours}
                        onChange={(e) => handleEdit(index, 'hours', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    ) : (
                      task.hours
                    )}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    {role === 'Project Lead' || role === 'Team Lead' ? (
                      <input
                        type="text"
                        value={task.productName}
                        onChange={(e) => handleEdit(index, 'productName', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    ) : (
                      task.productName
                    )}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    {role === 'Project Lead' || role === 'Team Lead' ? (
                      <DatePicker
                        selected={task.startDate}
                        onChange={(date) => handleEdit(index, 'startDate', date)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    ) : (
                      task.startDate.toLocaleDateString()
                    )}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    {role === 'Project Lead' || role === 'Team Lead' ? (
                      <DatePicker
                        selected={task.endDate}
                        onChange={(date) => handleEdit(index, 'endDate', date)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    ) : (
                      task.endDate.toLocaleDateString()
                    )}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    {role === 'Project Lead' ? (
                      <select
                        value={task.teamLeadApproval}
                        onChange={(e) => handleEdit(index, 'teamLeadApproval', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      >
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Not Started">Not Started</option>
                      </select>
                    ) : (
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          task.teamLeadApproval === 'Completed' ? 'bg-green-200 text-green-800'
                          : task.teamLeadApproval === 'In Progress' ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-red-200 text-red-800'
                        }`}
                      >
                        {task.teamLeadApproval}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    {role === 'Project Lead' ? (
                      <select
                        value={task.projectLeadApproval}
                        onChange={(e) => handleEdit(index, 'projectLeadApproval', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      >
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Not Started">Not Started</option>
                      </select>
                    ) : (
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                          task.projectLeadApproval === 'Completed' ? 'bg-green-200 text-green-800'
                          : task.projectLeadApproval === 'In Progress' ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-red-200 text-red-800'
                        }`}
                      >
                        {task.projectLeadApproval}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    {role === 'Project Lead' || role === 'Team Lead' ? (
                      <textarea
                        value={task.comment}
                        onChange={(e) => handleEdit(index, 'comment', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      />
                    ) : (
                      task.comment
                    )}
                  </td>
                  {role === 'Team Lead' && (
                    <td className="px-4 py-3 border-b border-gray-200 text-center">
                      <button
                        onClick={() => handleEdit(index, 'completed', true)}
                        className="text-blue-600 hover:underline"
                      >
                        Complete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {(role === 'Team Lead' || role === 'Project Lead') && (
          <div className="mt-6 text-right">
            <button
              onClick={handleAddTask}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
            >
              Add Task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskTable;
