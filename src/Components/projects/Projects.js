import styles from './Projects.module.css';

export default function Projects() {

    return (
        <div className={styles.project_section}>
            <div className={styles.background_pic}>
                <div className={styles.projects_title_div}>
                    <h1 className={styles.project_text}>PROJECTS</h1>
                </div>
            </div>

            <div className={styles.projects_container}>
                <div className={styles.item}>
                    <div className={styles.project__image}>
                        <img src="https://imgur.com/mWZYC22.jpg" />
                    </div>
                    <div className={styles.item__overlay}>
                        <h3 aria-hidden="true">Description:</h3>
                        <div className={styles.item__body}>
                            <h2>CryptoTalk</h2>
                            <p>Website designed to give up-to-date crypto data and be able to save your favorite cryptos for easy access to see their price, market cap, and more.<br />
                            <br /><u><b>Created With:</b></u><br />
                            MongoDB | Express.js | React | Node.js | JavaScript | REST API | Chart.js | CSS3 | HTML5 <br />
                                <a href="https://drew-e-wilson.github.io/Crypto-frontend/" target="_blank"><button id="liveSite">Visit Site</button></a>
                                <a href="" target="_blank"><button id="repo">Repo</button></a></p>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.project__image}>
                        <img src="https://i.imgur.com/7yhymVb.png" />
                    </div>
                    <div className={styles.item__overlay}>
                        <h3 aria-hidden="true">Description:</h3>
                        <div className={styles.item__body}>
                            <h2>Find-A-Recipe</h2>
                            <p>Search for your favorite recipes easily. Get ingredients and step by step instructions to make some of the best recipes you can think of.<br />
                            <br /><u><b>Created With:</b></u> <br />
                            React | JavaScript | REST API | CSS3 | HTML5 <br />
                                <a href="https://drew-e-wilson.github.io/find-a-recipe/" target="_blank"><button id="liveSite">Visit Site</button></a>
                                <a href="" target="_blank"><button id="repo">Repo</button></a></p>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.project__image}>
                        <img src="https://i.imgur.com/svsLIM3.png" />
                    </div>
                    <div className={styles.item__overlay}>
                        <h3 aria-hidden="true">Description:</h3>
                        <div className={styles.item__body}>
                            <h2>Codr</h2>
                            <p>A platform designed for people to share ideas, articles and coding issues and anyone be able to comment and post their own content.<br />
                            <br /><u><b>Created With:</b></u> <br />
                            JavaScript | React | Django | PostgreSQL | CSS3 | HTML5 <br />
                                <a href="https://bunmeevang.github.io/project-3-front/#/" target="_blank"><button id="liveSite">Visit Site</button></a>
                                <a href="" target="_blank"><button id="repo">Repo</button></a></p>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.project__image}>
                        <img src="https://imgur.com/ViRXswN.jpg" />
                    </div>
                    <div className={styles.item__overlay}>
                        <h3 aria-hidden="true">Description:</h3>
                        <div className={styles.item__body}>
                            <h2>Attack of the Holidays</h2>
                            <p>A single player fighting game against 3 evil holiday villians. Each villain is set in a different location. Take down all 3 to save the world.<br />
                            <br /><u><b>Created With:</b></u> <br />
                            JavaScript | HTML5 | CSS3 <br />
                                <a href="https://drew-e-wilson.github.io/Attack-of-the-Holidays/" target="_blank"><button id="liveSite">Visit Site</button></a>
                                <a href="" target="_blank"><button id="repo">Repo</button></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}