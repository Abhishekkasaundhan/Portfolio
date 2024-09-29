import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/p1.png';
import IMG2 from '../../assets/p2.png';
import IMG3 from '../../assets/p3.png';
import IMG4 from '../../assets/p4.jpg';


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Projects</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='Turnover Management & Position Clearing Portal' />
          </div>
          <h3>Turnover Management & Position Clearing Portal</h3>
          <p><strong>Description:</strong>
          1.Developed secure Flask apps with user authentication, dynamic content using Flask.
          <br />
2.Built data pipelines for Excel/CSV processing using Pandas, OS, glob, and logging.
<br />
3.Automated data extraction with Python requests & optimized file handling with OS & datetime.
<br />
4.Secured data using Werkzeug & enhanced performance with asynchronous requests & efficient workflows.
</p>
          <p><strong>Tech Stack:</strong>Python, Flask, HTML, CSS, JavaScript, React</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Abhishekkasaundhan/Turnover-Management-and-Position-Clearing-Portal' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
           
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='PG Life Website' />
          </div>
          <h3>PG Life Website</h3>
          <br />
          <p><strong>Description:</strong>
          1.Developed PG Life Website to simplify hotel room search based on user’s local position in any city.
          <br />
2.Utilized HTML, CSS, & JS for frontend development, ensuring seamless navigation & user experience.
<br />
3.Employed PHP for backend development to manage server-side operations efficiently.
<br />
4.Integrated MySQL for robust website data storage and retrieval.</p>
<br />
          <p><strong>Tech Stack:</strong>HTML, CSS, JavaScript, PHP, MySQL</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Abhishekkasaundhan/PG_LIFE_WEBSITE' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
            <a href='http://debanjansarkar.epizy.com/PGLIFE/index.php' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='Online Resume Builder Website' />
          </div>
          <h3>Online Resume Builder Website</h3>
          <br />
          <p><strong>Description:</strong>
          1.Seamlessly create and download personalized CV templates using our online resume builder.
          <br />
2.Developed with HTML, CSS, JS, and React to ensure a user-friendly design and smooth experience.
<br />
3.Customize your CV easily with various templates and layouts tailored to your professional needs.
<br />
4.Download your completed resume in multiple formats, ready to submit to potential employers.</p>
          <p><strong>Tech Stack:</strong> Python, SQL, HTML, CSS, JavaScript</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Abhishekkasaundhan/Online_Resume_Builder' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
            <a href='https://onlinexresumexbuilder.netlify.app/' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='Grocery Management System' />
          </div>
          <h3>Grocery Management System</h3>
          <p><strong>Description:</strong> 
          1.Built with Spring Boot, Hibernate, MySQL, and Angular for streamlined operations.
          <br />
          2.It manages inventory, processes sales, handles customers, and generates reports efficiently.
          <br />
          3.Modern web technologies provide a powerful backend and an intuitive user interface.
          <br />
          4.Designed for grocery store owners and employees to enhance operational efficiency.</p>
          <p><strong>Tech Stack:</strong>Java, SpringBoot, Hibernate, MySQL, Angular</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Abhishekkasaundhan/Grocery_Management' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;
