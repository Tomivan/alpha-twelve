import React, { useState, useEffect} from 'react';
import Home from '../../assets/images/home.svg';
import Events from '../../assets/images/events.svg';
import Speakers from '../../assets/images/speakers.svg';
import Reports from '../../assets/images/reports.svg';
import Notifications from '../../assets/images/notifications.svg';
import Messages from '../../assets/images/messages.svg';
import Settings from '../../assets/images/settings.svg';
import Avatar from '../../assets/images/Avatar.svg';
import CollapseIcon from '../../assets/images/collapse.svg';
import './sidebar.component.css';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Load the theme from local storage if it exists
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        }
    }, []);

    // Update the class on the body element based on the theme
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            localStorage.setItem('theme', 'dark'); // Save the theme preference
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light'); // Save the theme preference
        }
    }, [darkMode]);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <button className="menu-button" onClick={toggleSidebar}>
                ☰ Menu
            </button>

            <div className='sidebar'>
                <ul>
                    <li>
                        <img src={Home} alt='' className='sidebar-icon' />
                        Home
                    </li>
                    <li>
                        <img src={Events} alt='' className='sidebar-icon' />
                        Events
                    </li>
                    <li>
                        <img src={Speakers} alt='' className='sidebar-icon' />
                        Speakers
                    </li>
                    <li>
                        <img src={Reports} alt='' className='sidebar-icon' />
                        Reports
                    </li>
                    <li>
                        <img src={Notifications} alt='' className='sidebar-icon' />
                        Notifications
                    </li>
                    <li>
                        <img src={Messages} alt='' className='sidebar-icon' />
                        Messages
                    </li>
                    <li>
                        <img src={Settings} alt='' className='sidebar-icon' />
                        Settings
                    </li>
                </ul>
                <div className='collapses'>
                    <div className="collapse-section">
                        <img src={CollapseIcon} alt='' className='sidebar-icon' />
                        <span>Collapse</span>
                    </div>
                    <div className="dark-mode">
                        <label className="switch">
                            <input type="checkbox" checked={darkMode} onChange={handleToggle} />
                            <span className="slider round"></span>
                        </label>
                        <p>Dark Mode</p>
                    </div>
                    <div className="user">
                        <img src={Avatar} alt="a vector of the user" className='user-image'/>
                        <div className="user-info">
                            <p>Rudra Devi</p>
                            <p>rudra.devi@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;