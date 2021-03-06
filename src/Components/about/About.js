import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.container} id="aboutme">
            <div className={styles.pic_container}>
                <img src="https://i.imgur.com/c5SHVjX.jpg?1"></img>
            </div>
            <div className={styles.info_container}>
                <h1>About Me</h1>
                <h4>I am a Software Engineer with a background in International Business. I use enjoy using the MERN stack to build applications that solve clients’ needs and make their lives easier.</h4><br />
                <h4>I bring my passion for analysis and organizational knowledge to software development and use my skills and creativity to make each project unique. I love creating work that will be used by others and feel a responsibility to create the best product I can for the best experience.</h4>
            </div>
        </div>
    )
}