import styles from './Heading.module.css';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

export default function Heading() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: false, backDelay: 900, backSpeed: 60, strings: ['Front-End', "Back-End", 'Full-Stack'] })
    }, [])

    return (
        <div className={styles.container} id="myheader">
            <div className={styles.header_container}>
                <h1>Drew Wilson</h1>
                <div className={styles.rotating_container}>
                    <h2>Software Developer: </h2>
                    <span className={styles.rotating_names} ref={textRef}></span>
                </div>
                <div className={styles.social_sites_container}>
                    <a href="https://www.linkedin.com/in/drew-e-wilson/" target="_blank"><h2 className={styles.icon_logos}><AiFillLinkedin /></h2></a>
                    <a href="https://github.com/Drew-E-Wilson" target="_blank"><h2 className={styles.icon_logos}><AiFillGithub /></h2></a>
                </div>
                <Link className={styles.header_button} to="myprojects" smooth={true} duration={1000}>SKIP TO PROJECTS</Link>
            </div>
        </div>
    )
}