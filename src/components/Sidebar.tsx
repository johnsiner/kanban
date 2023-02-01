import classes from './Sidebar.module.css';
import logoLight from '../assets/logo-light.svg';
import logoDark from '../assets/logo-dark.svg';
import BoardIcon from '../assets/BoardIcon';
import HideSidebarIcon from '../assets/HideSidebarIcon';
import lightThemeIcon from '../assets/icon-light-theme.svg';
import darkThemeIcon from '../assets/icon-dark-theme.svg';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

type Props = {
   theme: string;
   sideBarIsShown: boolean;
   toggleSidebar: () => void;
   toggleTheme: () => void;
};

export default function Sidebar({
   theme,
   sideBarIsShown,
   toggleSidebar,
   toggleTheme,
}: Props) {
   return (
      <div
         className={`${classes.sidebar} ${
            theme === 'dark' ? classes.dark : ''
         } ${sideBarIsShown ? classes.active : ''}`}
      >
         <div className={classes.logo}>
            <img src={theme === 'light' ? logoDark : logoLight} alt="" />
         </div>
         <h4>ALL BOARDS (3)</h4>
         <div className={classes.boards}>
            <div className={classes.selected}>
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
         <div className={classes['new-board']}>
            <div>
               <BoardIcon />
            </div>
            <h3>+ Create New Board</h3>
         </div>
         <div className={classes.buttom}>
            <div className={classes['theme']}>
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
            <div className={classes['hide-sidebar']} onClick={toggleSidebar}>
               <div>
                  <HideSidebarIcon />
               </div>
               <h3>Hide Sidebar</h3>
            </div>
         </div>
      </div>
   );
}
