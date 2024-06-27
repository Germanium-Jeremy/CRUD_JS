import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditTask = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/getTasks/${id}`)
      .then(response => setTitle(response.data.title))
      .catch(error => console.error('There was an error fetching the task!', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/editTasks/${id}`, { title })
      .then(() => navigate('/tasks'))
      .catch(error => console.error('There was an error updating the task!', error));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
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
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTask;