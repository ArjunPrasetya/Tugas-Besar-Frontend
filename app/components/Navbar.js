// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css'; // Contoh penggunaan CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
            <Link legacyBehavior className={styles.navLink} href="/">Home</Link>
        </li>
        {/* Tambahkan lebih banyak item menu sesuai kebutuhan */}
      </ul>
    </nav>
  );
};

export default Navbar;
