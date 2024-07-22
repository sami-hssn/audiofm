import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SamplesPage from './pages/SamplesPage';
import CollaboratePage from './pages/CollaboratePage';
import TutorialsPage from './pages/TutorialsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LanguageSelect from './components/languageSelect/LanguageSelect';
import App from './App';
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/projects",
    element: <ProjectsPage/>,
  },
  {
    path: "/samples",
    element: <SamplesPage/>,
  },
  {
    path: "/collaborate",
    element: <CollaboratePage/>,
  },
  {
    path: "/tutorials",
    element: <TutorialsPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/profile",
    element: <ProfilePage/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <LanguageSelect />
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);