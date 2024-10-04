import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts.css'
import LoginPage from './Pages/LoginPage.jsx';
import App from './App.jsx';

const root = createRoot(document.body);
root.render(
    <App/>
);