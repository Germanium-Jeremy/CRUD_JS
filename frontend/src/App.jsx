import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landing';
import TaskList from './components/Tasks';
import AddTask from './components/AddTask';
import EditTask from './components/Edit';
import Footer from './components/Footer';
import Header from './components/Header';
import { UserProvider } from './contexts/UserContects';
import Signup from './components/Signup';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="w-screen">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/edit-task/:id" element={<EditTask />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;