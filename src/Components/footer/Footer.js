import styles from './Footer.module.css';
import { AiOutlineCopyright, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {

    return (
        <div className={styles.footer_container}>
            <div className={styles.sep_container}>
                <div className={styles.footer_sites_container}>
                    <a href="https://www.linkedin.com/in/drew-e-wilson/" target="_blank"><h2 className={styles.icon_logos}><AiFillLinkedin /></h2></a>
                    <a href="https://github.com/Drew-E-Wilson" target="_blank"><h2 className={styles.icon_logos}><AiFillGithub /></h2></a>
                </div>
                <h4>Copyright <AiOutlineCopyright /> Drew Wilson ~ 2021</h4>
            </div>
        </div>
    )
}