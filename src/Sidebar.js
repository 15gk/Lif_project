import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
import {links } from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfevcj0YPnCZjVfUjWcAPLlciLYFeB84_sw&usqp=CAU" className='logo' alt='Lif_project' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;