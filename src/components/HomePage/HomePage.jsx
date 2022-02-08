import React from 'react';
import myPhoto from '../../assets/images/matthanrahan.jpg'
const HomePage = (props) => {
    
    const me =
        { first: "Matthew", middle: "Thomas", last: "Hanrahan", image: myPhoto }
        ;
    return (
        <div className='homepage'>
            <div className='splash'>
                <div className='splash-logo'>
                    <img className='homepage-logo' src={me.image} alt="me"/>
                </div>
                <div className='splash-name'>
                    <h1>{me.first}</h1>
                    <h1>{me.middle}</h1>
                    <h1>{me.last}</h1>
                </div>

            </div>
            <div className='splash-description'>
                <p>I am a full-stack software developer in JavaScript, React, React-Native. I graduated from Durham Tech
                    Community College with an Associates's Degree in Software Development in Jun 2020. During school, i was
                    exposed to several different programming languages such as C#, Java, Swift, HTML/CSS, SAS, and Python. </p>
            </div>
            
            </div>
        )
}

export default HomePage;
