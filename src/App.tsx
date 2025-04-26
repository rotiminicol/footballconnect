import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Players from './pages/Players';
import Clubs from './pages/Clubs';
import Messages from './pages/Messages';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/players"
            element={
              <PrivateRoute>
                <MainLayout>
                  <Players />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/clubs"
            element={
              <PrivateRoute>
                <MainLayout>
                  <Clubs />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <PrivateRoute>
                <MainLayout>
                  <Messages />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <MainLayout>
                  <Profile />
                </MainLayout>
              </PrivateRoute>
            }
          />
        </Routes>
        <Toaster position="top-right" />
      </AuthProvider>
    </Router>
  );
}

export default App;