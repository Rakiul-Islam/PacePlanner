import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskTable from './components/TaskTable';
import Settings from './components/Settings'; 
import HomePage from './components/HomePage';

const App = () => (
  <Router>
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskTable />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
