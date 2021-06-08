import styles from './Resume.module.css'

export default function Resume() {
    return (
        <div className={styles.resume_container}>
            <h1>Resume</h1>
            <button>DOWNLOAD PDF</button>
        </div>
    )
}