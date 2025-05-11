import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../images/magic.gif';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="My Company" className={styles.logo} />
        <span>My Company</span>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li><button className={styles.button}>Menu 1</button></li>
        <li><button className={styles.button}>Menu 2</button></li>
        <li><button className={styles.button}>Menu 3</button></li>
        <li><button className={styles.login}>Login</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
