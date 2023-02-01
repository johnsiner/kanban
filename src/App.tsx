import React, { useState, useEffect } from 'react';
import './App.css';
import useThemeDetector from './hooks/useThemeDetector';
import Sidebar from './components/Sidebar';
import showSidebarIcon from './assets/icon-show-sidebar.svg';
import Header from './components/Header';

function App() {
   const [theme, setTheme] = useState(useThemeDetector() ? 'dark' : 'light');
   const [showSidebar, setShowSidebar] = useState(true);

   const toggleSidebar = () => {
      setShowSidebar((prevState) => !prevState);
   };

   const toggleTheme = () => {
      setTheme((prevState) => {
         if (prevState === 'light') {
            return 'dark';
         } else return 'light';
      });
   };

   return (
      <div className={`App ${showSidebar ? 'active-sidebar' : ''}`} id={theme}>
         <Sidebar
            theme={theme}
            sideBarIsShown={showSidebar}
            toggleSidebar={toggleSidebar}
            toggleTheme={toggleTheme}
         />
         <Header
            theme={theme}
            sideBarIsShown={showSidebar}
            toggleTheme={toggleTheme}
         />
         <main>
            <div className="show-sidebar" onClick={toggleSidebar}>
               <img src={showSidebarIcon} alt="" />
            </div>
         </main>
      </div>
   );
}

export default App;
