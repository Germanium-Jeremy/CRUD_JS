import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Task Manager</h1>
      <Link to="/tasks" className="px-4 py-2 bg-blue-500 text-white rounded">
        View Tasks
      </Link>
    </div>
  );
};

export default LandingPage;