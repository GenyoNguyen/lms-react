import React from 'react'
import './HomePage.css'
import Sidebar, { SidebarItem } from '../Components/Sidebar.jsx';
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
  Book
} from 'lucide-react';
import { Outlet, useLocation } from 'react-router-dom';


function HomePage() {
  const location = useLocation();
  return (
    <main className='App flex'>
      <Sidebar username="Lmao" email="lmao@bruh.dark">
        <SidebarItem
          icon={<LayoutDashboard size={20}/>}
          text="Dashboard"
          link="dashboard"
          active={(location.pathname == "/home" || location.pathname == "/home/dashboard" ? true : false)}
        />
        <SidebarItem
          icon={<BarChart3 size={20}/>}
          text="Statistics"
          link="statistics"
          active={(location.pathname == "/home/statistics" ? true : false)}
        />
        <SidebarItem
          icon={<Book size={20}/>}
          text="Courses"
          link="courses"
          active={(location.pathname == "/home/courses" ? true : false)}
        />
      </Sidebar>
      <div className='w-30'></div>
      <Outlet/>
    </main>
  );
}

export default HomePage;