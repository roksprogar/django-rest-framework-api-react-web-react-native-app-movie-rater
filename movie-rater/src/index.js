import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import Auth from './components/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/movies",
    element: <App />,
  },
]);

export const TokenContext = createContext(null)

function Router() {

  const [token, setToken] = useState('')

  return (
    <React.StrictMode>
      <TokenContext.Provider value={{token, setToken}}>
        <RouterProvider router={router} />
      </TokenContext.Provider>
    </React.StrictMode>
  )
}

root.render(
  <Router />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
