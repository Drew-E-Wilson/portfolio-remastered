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
                            <u><b>Created With:</b></u> <br />
                            MongoDB | Express.js | React | Node.js | JavaScript | REST API | Chart.js | CSS3 | HTML5 <br />
                                <a href="https://drew-e-wilson.github.io/Crypto-frontend/" target="_blank"><button id="liveSite">Live Site</button></a>
                                <a href="" target="_blank"><button id="repo">Repo</button></a></p>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.project__image}>
                        <img src="https://imgur.com/CDAnD0X.jpg" />
                    </div>
                    <div className={styles.item__overlay}>
                        <h3 aria-hidden="true">Description:</h3>
                        <div className={styles.item__body}>
                            <h2>Find-A-Recipe</h2>
                            <p>Searching for your favorite recipes easily. Get ingredients and step by step instructions to make some of the best recipes you can think of.<br />
                            <u><b>Created With:</b></u> <br />
                            React | JavaScript | REST API | CSS3 | HTML5 <br />
                                <a href="" target="_blank"><button id="liveSite">Live Site</button></a>
                                <a href="" target="_blank"><button id="repo">Repo</button></a></p>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.project__image}>
                        <img src="https://imgur.com/Y66lcHk.jpg" />
                    </div>
                    <div className={styles.item__overlay}>
                        <h3 aria-hidden="true">Description:</h3>
                        <div className={styles.item__body}>
                            <h2>Codr</h2>
                            <p>A platform designed for people to share ideas, articles and coding issues and anyone be able to comment and post their own content.<br />
                            <u><b>Created With:</b></u> <br />
                            JavaScript | React | Django | PostgreSQL | CSS3 | HTML5 <br />
                                <a href="" target="_blank"><button id="liveSite">Live Site</button></a>
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
                            <u><b>Created With:</b></u> <br />
                            JavaScript | HTML5 | CSS3 <br />
                                <a href="" target="_blank"><button id="liveSite">Live Site</button></a>
                                <a href="" target="_blank"><button id="repo">Repo</button></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

            {/* <div className={styles.projects_container}>
                <div className={styles.individual_project}>
                    <a href="https://drew-e-wilson.github.io/Crypto-frontend/" target="_blank" ><img src="https://imgur.com/mWZYC22.jpg" className={styles.project_img}></img>
                    <h1>CryptoTalk</h1></a>
                    <h4>Designed to give up-to-date crypto data and be able to save your favorite cryptos for easy access to see their price, market cap, and more. </h4>
                    <h4>Created with:</h4>
                    <h4>MongoDB | Express.js | React | Node.js JavaScript | REST API | Chart.js | CSS3 HTML5</h4>
                </div>
                <div className={styles.individual_project}>
                    <a href="https://drew-e-wilson.github.io/find-a-recipe/" target="_blank"><img src="https://imgur.com/CDAnD0X.jpg" className={styles.project_img}></img>
                    <h1>Find-A-Recipe</h1></a>
                    <h4>Searching for your favorite recipes easily. Get ingredients and step by step instructions to make some of the best recipes you can think of.</h4>
                    <h4>Created with:</h4>
                    <h4>React | JavaScript | REST API | CSS3 | HTML5</h4>
                </div>
                <div className={styles.individual_project}>
                    <a href="https://bunmeevang.github.io/project-3-front/#/" target="_blank"><img src="https://imgur.com/Y66lcHk.jpg" className={styles.project_img}></img>
                    <h1>Codr</h1></a>
                    <h4>A platform designed for people to share ideas, articles and coding issues and anyone be able to comment and post their own content.</h4>
                    <h4>Created with:</h4>
                    <h4>JavaScript | React | Django | PostgreSQL CSS3 | HTML5</h4>
                </div>
                <div className={styles.individual_project}>
                    <a href="https://drew-e-wilson.github.io/Attack-of-the-Holidays/" target="_blank"><img src="https://imgur.com/ViRXswN.jpg" className={styles.project_img}></img>
                    <h1>Attack of the Holidays</h1></a>
                    <h4>A single player fighting game against 3 evil holiday villians. Each villain is set in a different location. Take down all 3 to save the world.</h4>
                    <h4>Created with:</h4>
                    <h4>JavaScript | HTML5 | CSS3</h4>
                </div>
            </div> */}
