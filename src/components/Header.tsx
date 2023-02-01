import './Header.css';
import { useState, useEffect, Fragment } from 'react';
import logoDark from '../assets/logo-dark.svg';
import logoLight from '../assets/logo-light.svg';
import logoMobile from '../assets/logo-mobile.svg';
import iconAddTask from '../assets/icon-add-task-mobile.svg';
import iconOptions from '../assets/icon-vertical-ellipsis.svg';
import iconChevron from '../assets/icon-chevron-down.svg';
import Toggle from 'react-toggle';
import BoardIcon from '../assets/BoardIcon';
import lightThemeIcon from '../assets/icon-light-theme.svg';
import darkThemeIcon from '../assets/icon-dark-theme.svg';

type Props = {
   sideBarIsShown: boolean;
   theme: string;
   toggleTheme: () => void;
};

export default function Header({ sideBarIsShown, theme, toggleTheme }: Props) {
   const [logoShown, setLogoShown] = useState(false);
   const [mobileBarIsShown, setMobileBarIsShown] = useState(false);

   console.log(mobileBarIsShown);

   useEffect(() => {
      if (!sideBarIsShown) {
         const timer = setTimeout(() => {
            setLogoShown(true);
         }, 150);

         return () => {
            clearTimeout(timer);
         };
      } else {
         setLogoShown(false);
      }
   }, [sideBarIsShown]);
   const logoClass = `logo ${!logoShown ? 'hide' : ''}`;

   return (
      <header className={mobileBarIsShown ? 'active' : ''}>
         <div className={logoClass}>
            <img src={theme === 'light' ? logoDark : logoLight} alt="" />
         </div>
         <div className="logo-mobile">
            <img src={logoMobile} alt="" />
         </div>
         <div className="vl"></div>
         <div className="right">
            <div
               className="board-name"
               onClick={() => setMobileBarIsShown((prev) => !prev)}
            >
               <h1>Platform Launch</h1>
               <div>
                  <img src={iconChevron} alt="" />
               </div>
            </div>
            <div className="action">
               <div className="add-task">
                  <div>
                     <img src={iconAddTask} alt="+" />
                  </div>
                  <h3>Add New Task</h3>
               </div>
               <div tabIndex={0} className="options">
                  <img src={iconOptions} alt="" />
                  <div className="options-menu">
                     <p>Edit Board</p>
                     <p className="delete">Delete Board</p>
                  </div>
               </div>
            </div>
         </div>
         {mobileBarIsShown && (
            <Fragment>
               <div className="overlay"></div>
               <div className="mobile-bar">
                  <h4>ALL BOARDS (3)</h4>
                  <div className="boards">
                     <div className="selected">
                        <div>
                           <BoardIcon />
                        </div>
                        <h3>Platform Launch</h3>
                     </div>
                     <div>
                        <div>
                           <BoardIcon />
                        </div>
                        <h3>Marketing Plan</h3>
                     </div>
                     <div>
                        <div>
                           <BoardIcon />
                        </div>
                        <h3>Roadmap</h3>
                     </div>
                  </div>
                  <div className="new-board">
                     <div>
                        <BoardIcon />
                     </div>
                     <h3>+ Create New Board</h3>
                  </div>
                  <div className="theme">
                     <div>
                        <img src={lightThemeIcon} alt="" />
                     </div>
                     <Toggle
                        defaultChecked={theme === 'light' ? false : true}
                        icons={false}
                        onChange={toggleTheme}
                        className="theme-toggle"
                     />
                     <div>
                        <img src={darkThemeIcon} alt="" />
                     </div>
                  </div>
               </div>
            </Fragment>
         )}
      </header>
   );
}
