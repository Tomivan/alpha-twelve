import React from 'react';
import Home from '../../assets/images/home.svg';
import Events from '../../assets/images/events.svg';
import Speakers from '../../assets/images/speakers.svg';
import Reports from '../../assets/images/reports.svg';
import Notifications from '../../assets/images/notifications.svg';
import Messages from '../../assets/images/messages.svg';
import Settings from '../../assets/images/settings.svg';
import Avatar from '../../assets/images/Avatar.svg';
import 'sidebar.component.jsx';

const Sidebar = () => {
    <div className='sidebar'>
        <ul>
            <li>
                <img src={Home} alt='' className='sidebar-icon' />
                Home
            </li>
            <li>
                <img src={Events} alt='' className='siedebar-icon' />
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
        <div className='collapse'>
            <span>Collapse</span>
            <p>Dark Mode</p>
            <div className="user">
                <img src={Avatar} alt="a vector of the user image" className='user-image'/>
                <div className="user-info">
                    <p>Rudra Devi</p>
                    <p>rudra.devi@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
}

export default Sidebar;