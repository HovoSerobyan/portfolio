import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.jpg'
import IMG4 from '../../assets/img4.jpg'
import IMG5 from '../../assets/img5.jpg'
import IMG6 from '../../assets/img6.jpg'


const Portfolio = () => {

    const data = [
        {
            id: 1,
            image: IMG1,
            title: 'Crypto Currency Dashboard & Financial Visualization',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/16673715-Cripto-currency-dashboards-and-financial-data-visualization'
        },
        {
            id: 2,
            title: 'Charts templates & infographics in Figma',
            image: IMG2,
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
        },
        {
            id: 3,
            title: 'Figma dashboard UI kit for data design web apps',
            image: IMG3,
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
        },
        {
            id: 4,
            title: 'Maintaining tasks and tracking progress',
            image: IMG4,
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
        },
        {
            id: 5,
            title: 'Charts templates & infographics in Figma',
            image: IMG5,
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
        },
        {
            id: 6,
            title: 'Charts templates & infographics in Figma',
            image: IMG6,
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
        },
    ]

    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio_item'>
                                <div className="portfolio_item_image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item_cta">
                                    <a href={github} className='btn' target='_blank'>GitHub</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live
                                        Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;