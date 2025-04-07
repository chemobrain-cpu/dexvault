// components/Sidebar.jsx
import React from 'react';
import styles from './Sidebar.module.css';



const Sidebar = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && <><div className={styles.overlay} onClick={onClose} />
      
        <div className={styles.sidebarHeader}>
          <h2>Sidebar</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>
        {children}
        </>}
    
    </>
  );
};

export default Sidebar;
