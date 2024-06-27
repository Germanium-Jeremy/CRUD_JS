import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getTasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('There was an error fetching tasks!', error));
  }, []);

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/deleteTasks/${id}`)
      .then(() => location.reload())
      .catch(error => console.error('There was an error deleting the task!', error));
  };

  return (
    <div className="p-4 mt-[5rem]">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <Link to="/add-task" className="px-4 py-2 bg-green-500 text-white rounded mb-4 inline-block">
        Add Task
      </Link>
      <ul className="list-none">
        {tasks.map(task => (
          <li key={task._id} className="mb-2 p-4 bg-gray-200 rounded flex justify-between items-center">
            <span>{task.title}</span>
            <div>
              <Link to={`/edit-task/${task._id}`} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
                Edit
              </Link>
              <button onClick={() => deleteTask(task._id)} className="px-4 py-2 bg-red-500 text-white rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;