import * as React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import Dashboard from './Pages/Home/Dashboard.jsx';
import Statistics from './Pages/Home/Statistics.jsx';
import Courses from './Pages/Home/Courses.jsx';


export default function App() {
  return (
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path='/' exact element={<LoginPage/>}></Route>
                <Route path='/home' exact element={<HomePage/>}>
                  <Route index element={<Dashboard/>}/>
                  <Route path='dashboard' element={<Dashboard/>}/>
                  <Route path='statistics' element={<Statistics/>}/>
                  <Route path='courses' element={<Courses/>}/>
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
  );
}