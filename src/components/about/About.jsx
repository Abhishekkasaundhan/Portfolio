import React from "react"
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaSchool} from 'react-icons/fa'
import {RiMedal2Fill} from 'react-icons/ri'
import {GoProjectSymlink} from 'react-icons/go'

const About = () => {
    return(
        <section id="about">
          <h5>Want to know</h5>
          <h2>About Me</h2>

          <div className="container about__container">
             <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt='About image'/>
             </div>
          </div>

          <div className="about__content">
             <div className="about__cards">
                <article className="about__card">
                    <FaSchool className="about__icon"/>
                    <h5>College</h5>
                    <small>Galgotias College of Engineering & Technology</small>
                </article>

                <article className="about__card">
                    <RiMedal2Fill className="about__icon"/>
                    <h5>Course</h5>
                    <small>B Tech. in computer science and engineering</small>
                </article>

                <article className="about__card">
                    <GoProjectSymlink className="about__icon"/>
                    <h5>Projects</h5>
                    <small>Worked on our College & Companies projects</small>
                </article>
             </div>

             <p>
             A driven Computer Science Engineer passionate about software development, proficient in HTML, JavaScript, CSS, Java, Python, J2EE, and Spring. With expertise in full stack development, I excel in team settings, tackling complex projects with innovative problem-solving. Outside of work, I express my creativity through painting and dancing, stay updated on industry trends, and stay active with sports.
             </p>

             <a href="#contact" className="btn btn-primary">Let's Connect</a>
           </div>
          </div>
        </section>
    )
}
export default About