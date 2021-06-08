import React, {Link} from 'react-scroll';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div>
                <h4 className={styles.navlogo}>LOGO</h4>
            </div>
            <div className={styles.mylinks}>
                <Link className={styles.navlinks}>ABOUT</Link>
                <Link className={styles.navlinks}>PROJECTS</Link>
                <Link className={styles.navlinks}>RESUME</Link>
                <Link className={styles.navlinks}>CONTACT</Link>
            </div>
        </div>
    )
}