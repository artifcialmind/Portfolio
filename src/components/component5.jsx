import React from "react";
import "../App.css";
import cross from '../assets/cross.png';


const Projects = (props) => {
    
    const handleCloseProject = () => {
        props.clickOnClose();
    }

    return (
        <div id="project-container" style={props.style}>
            <img id='close-project' src={cross} onClick={handleCloseProject}></img>
            <div id='project-contents'>
                <ul className="unordered-list-project">
                    <li>
                        <div className="project-content-div">
                            <h2 className="project-content-heading">Sign Language Detector</h2>
                        </div>
                        <br></br>
                        <p className="project-content-text">A deep learning based software capable of understanding sign languages and also displays capablity of translating english to sign language.</p>
                        <p className="project-content-text">The demo can be seen here</p>
                        <a href="https://www.linkedin.com/posts/shiwans-trivedi-6a6b20229_connections-project-language-activity-6995649395329253376-0_8s/" target="_blank">Sign Language Demo</a>
                    </li>
                    <br></br>
                    <br></br>
                    <li>
                        <div className="project-content-div">
                            <h2 className="project-content-heading">Crops Disease Detector</h2>
                        </div>
                        <br></br>
                        <p className="project-content-text">Online platform for the classification of crops where use can drop different types of crops images and get it checked for various kind of diseases.</p>
                        <p className="project-content-text">The link to the website can be found below (**Please be patient as it might take time to load due to free hosting**)</p>
                        <a href="https://crop-disease-detector-ai.onrender.com/" target="_blank">Crop Disease Detector Website</a>
                    </li>
                    <br></br>
                    <br></br>
                    <li>
                        <div className="project-content-div">
                            <h2 className="project-content-heading">Astro</h2>
                        </div>
                        <br></br>
                        <p className="project-content-text">A highly sophisticated software that uses a chatbot customised for kids named "Astro" that can talk with kids and
                        monitor there mental health through the conversations and prepare a report based on machine learning algorithms and natural language processing. </p>
                        <p className="project-content-text">The Demo can be seen here-:</p>
                        <a href="https://youtu.be/VT3_kP_1eEY" target="_blank">Astro Demo</a>
                    </li>
                    <br></br>
                    <br></br>
                    <li>
                        <div className="project-content-div">
                            <h2 className="project-content-heading">360 degree Feedback Software for Government</h2>
                        </div>
                        <br></br>
                        <p className="project-content-text">A fully automated software to scrape data from different media website, videos to find 
                        defamatory news against the Government. It analyses the text, classifies it to which concerned authority the news belongs to and send them mail of the portion of
                        the text/video which was defamatory.</p>
                        <p className="project-content-text">Software demonstration can be found below-:</p>
                        <a href="https://youtu.be/jR9b3t9UBLY" target="_blank">Software Demo</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects;