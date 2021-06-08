import styles from './Projects.module.css'

export default function Projects() {
    return (
        <div className={styles.project_section}>
            <h1>Projects</h1>
            <div className={styles.projects_container}>
                <div className={styles.individual_project}>
                    <a href="https://drew-e-wilson.github.io/Crypto-frontend/" target="_blank" ><img src="https://imgur.com/mWZYC22.jpg" className={styles.project_img}></img>
                    <h2>CryptoTalk</h2></a>
                    <h4>Designed to give up-to-date crypto data and be able to save your favorite cryptos for easy access to see their price, market cap, and more. </h4>
                    <h4>Created with:</h4>
                    <h4>MongoDB | Express.js | React | Node.js JavaScript | REST API | Chart.js | CSS3 HTML5</h4>
                </div>
                <div className={styles.individual_project}>
                    <a href="https://drew-e-wilson.github.io/find-a-recipe/" target="_blank"><img src="https://imgur.com/CDAnD0X.jpg" className={styles.project_img}></img>
                    <h2>Find-A-Recipe</h2></a>
                    <h4>Searching for your favorite recipes easily. Get ingredients and step by step instructions to make some of the best recipes you can think of.</h4>
                    <h4>Created with:</h4>
                    <h4>React | JavaScript | REST API | CSS3 | HTML5</h4>
                </div>
                <div className={styles.individual_project}>
                    <a href="https://bunmeevang.github.io/project-3-front/#/" target="_blank"><img src="https://imgur.com/Y66lcHk.jpg" className={styles.project_img}></img>
                    <h2>Codr</h2></a>
                    <h4>A platform designed for people to share ideas, articles and coding issues and anyone be able to comment and post their own content.</h4>
                    <h4>Created with:</h4>
                    <h4>JavaScript | React | Django | PostgreSQL CSS3 | HTML5</h4>
                </div>
                <div className={styles.individual_project}>
                    <a href="https://drew-e-wilson.github.io/Attack-of-the-Holidays/" target="_blank"><img src="https://imgur.com/ViRXswN.jpg" className={styles.project_img}></img>
                    <h2>Attack of the Holidays</h2></a>
                    <h4>A single player fighting game against 3 evil holiday villians. Each villain is set in a different location. Take down all 3 to save the world.</h4>
                    <h4>Created with:</h4>
                    <h4>JavaScript | HTML5 | CSS3</h4>
                </div>
            </div>
        </div>
    )
}