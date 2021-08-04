import React, { Link } from 'react-scroll';
import styles from './Navbar.module.css';

export default function Navbar() {
    const logo = "< Drew Wilson / >"

    return (
        <div className={styles.navbar} id="mynavbar">
            <div>
                <Link className={styles.navlogo} to="myheader" smooth={true} duration={1000}>{logo}</Link>
            </div>
            <div className={styles.mylinks}>
                <Link className={styles.navlinks} to="aboutme" smooth={true} duration={1000}>ABOUT</Link>
                <Link className={styles.navlinks} to="myprojects" smooth={true} duration={1000}>PROJECTS</Link>
                {/* <Link className={styles.navlinks}>RESUME</Link> */}
                <Link className={styles.navlinks} to="myresume" smooth={true} duration={1000}>CONTACT</Link>
                {/* <a href="/resume/Resume.pdf" download="Resume.pdf" className={styles.resumealink}><h3 className={styles.resumelink}>Resume</h3></a> */}
            </div>
        </div>
    )
}