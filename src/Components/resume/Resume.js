import styles from './Resume.module.css'
import {BsFileEarmarkArrowDown} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {GiSmartphone} from "react-icons/gi";

export default function Resume() {
    return (
        <div className={styles.block_container}>
            <div className={styles.info_container}>
                <BsFileEarmarkArrowDown className={styles.react_icon}/>
                <h2>Resume</h2>
                <p>___________</p>
                <a href="/resume/Resume.pdf" download="Resume.pdf"><h3>Download as PDF</h3></a>
            </div>
            <div className={styles.info_container}>
                <AiOutlineMail className={styles.react_icon}/>
                <h2>Email</h2>
                <p>___________</p>
                <a href = "mailto: drewewilson1@gmail.com"><h3>drewewilson1@gmail.com</h3></a>
            </div>
            <div className={styles.info_container}>
                <GiSmartphone className={styles.react_icon}/>
                <h2>Phone</h2>
                <p>___________</p>
                <h3>630.696.7997</h3>
            </div>
        </div>
    )
}