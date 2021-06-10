import styles from './Projects.module.css';
import {useState} from 'react';

export default function Projects() {
 
    const showStuff1 = () => {
        const stags = document.getElementById("smallstuff");
        stags.classList.add(styles.small_description)
        const ptags = document.getElementById("biggerstuff")
        ptags.classList.add(styles.p_go_taller)
    }

    const removeStuff1 = () => {
        const element = document.getElementById("smallstuff");
        element.classList.remove(styles.small_description)
        const ptags = document.getElementById("biggerstuff")
        ptags.classList.remove(styles.p_go_taller)
    }

    const showStuff2 = () => {
        const stags = document.getElementById("smallstuff2");
        stags.classList.add(styles.small_description)
        const ptags = document.getElementById("biggerstuff2")
        ptags.classList.add(styles.p_go_taller)
    }

    const removeStuff2 = () => {
        const element = document.getElementById("smallstuff2");
        element.classList.remove(styles.small_description)
        const ptags = document.getElementById("biggerstuff2")
        ptags.classList.remove(styles.p_go_taller)
    }

    const showStuff3 = () => {
        const stags = document.getElementById("smallstuff3");
        stags.classList.add(styles.small_description)
        const ptags = document.getElementById("biggerstuff3")
        ptags.classList.add(styles.p_go_taller)
    }

    const removeStuff3 = () => {
        const element = document.getElementById("smallstuff3");
        element.classList.remove(styles.small_description)
        const ptags = document.getElementById("biggerstuff3")
        ptags.classList.remove(styles.p_go_taller)
    }

    const showStuff4 = () => {
        const stags = document.getElementById("smallstuff4");
        stags.classList.add(styles.small_description)
        const ptags = document.getElementById("biggerstuff4")
        ptags.classList.add(styles.p_go_taller)
    }

    const removeStuff4 = () => {
        const element = document.getElementById("smallstuff4");
        element.classList.remove(styles.small_description)
        const ptags = document.getElementById("biggerstuff4")
        ptags.classList.remove(styles.p_go_taller)
    }





    return (
        <div className={styles.project_section}>
            <div className={styles.background_pic}>
                <div className={styles.projects_title_div}>
                    <h1 className={styles.project_text}>PROJECTS</h1>
                </div>
            </div>
            <div className={styles.projects_container}>
                <div className={styles.project_img1} onMouseEnter={ true ? showStuff1 : null } onMouseLeave={true ? removeStuff1 : null} >
                    <p id="biggerstuff" className={styles.show_description} ><b>Description:</b> <br />
                        <small id="smallstuff">Website designed to give up-to-date crypto data and be able to save your favorite cryptos for easy access to see their price, market cap, and more. <br />
                        <u><b>Created With:</b></u> <br />
                        MongoDB | Express.js | React | Node.js | JavaScript | REST API | Chart.js | CSS3 | HTML5 <br />
                            <button id="liveSite">Live Site</button>
                            <button id="repo">Repo</button>
                        </small> 
                    </p>
                </div>
                <div className={styles.project_img2} onMouseEnter={ true ? showStuff2 : null } onMouseLeave={true ? removeStuff2 : null} >
                    <p id="biggerstuff2" className={styles.show_description} ><b>Description:</b> <br />
                        <small id="smallstuff2">Searching for your favorite recipes easily. Get ingredients and step by step instructions to make some of the best recipes you can think of. <br />
                        <u><b>Created With:</b></u> <br />
                        React | JavaScript | REST API | CSS3 | HTML5 <br />
                            <button id="liveSite">Live Site</button>
                            <button id="repo">Repo</button>
                        </small> 
                    </p>
                </div>
                <div className={styles.project_img3} onMouseEnter={ true ? showStuff3 : null } onMouseLeave={true ? removeStuff3 : null} >
                    <p id="biggerstuff3" className={styles.show_description} ><b>Description:</b> <br />
                        <small id="smallstuff3">A platform designed for people to share ideas, articles and coding issues and anyone be able to comment and post their own content.<br />
                        <u><b>Created With:</b></u> <br />
                        JavaScript | React | Django | PostgreSQL CSS3 | HTML5 <br />
                            <button id="liveSite">Live Site</button>
                            <button id="repo">Repo</button>
                        </small> 
                    </p>
                </div>
                <div className={styles.project_img4} onMouseEnter={ true ? showStuff4 : null } onMouseLeave={true ? removeStuff4 : null} >
                    <p id="biggerstuff4" className={styles.show_description} ><b>Description:</b> <br />
                        <small id="smallstuff4">A platform designed for people to share ideas, articles and coding issues and anyone be able to comment and post their own content.<br />
                        <u><b>Created With:</b></u> <br />
                        JavaScript | React | Django | PostgreSQL CSS3 | HTML5 <br />
                            <button id="liveSite">Live Site</button>
                            <button id="repo">Repo</button>
                        </small> 
                    </p>
                </div>
            </div>
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
        </div>
    )
}