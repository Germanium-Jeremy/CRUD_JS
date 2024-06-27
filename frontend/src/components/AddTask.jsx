import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/addTasks', { title })
      .then(() => navigate('/tasks'))
      .catch(error => console.error('There was an error adding the task!', error));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Task Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;