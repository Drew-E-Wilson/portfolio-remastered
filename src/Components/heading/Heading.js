import styles from './Heading.module.css';
export default function Heading() {
    return(
        <div className={styles.container}>
            <div>Logo Design</div>
            <h1>Drew Wilson</h1>
            <h2>Full-Stack Software Developer</h2>
            <h4>Linkedin icon</h4>
            <h4>Github Icon</h4>
            <button>SKIP TO PROJECTS</button>
          </div>
    )
}