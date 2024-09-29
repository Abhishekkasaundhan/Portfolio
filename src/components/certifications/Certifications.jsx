import React from 'react'
import './certifications.css'
import CER1 from '../../assets/c1.png'
import CER2 from '../../assets/c2.png'
import CER3 from '../../assets/c3.png'
import CER4 from '../../assets/c4.png'
import CER5 from '../../assets/c5.png'

const certifications = () => {
  return (
    <section id='certifications'>
      <h2>My Certifications</h2>

      <div className='container certification__container'>


      <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER4} alt=''/>
          <h3>HTML, CSS, and JS for Web Developers</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/17I9h4nh04X9WVl42mIJr_kH_vn0zGDHU/view?usp=sharing' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>
 

        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER5} alt=''/>
          <h3>Web Development Training Certificate</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1v8YPCTqQ5KopmuKbdSUfThbH9_Fj9cgv/view?usp=sharing' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>


        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER3} alt=''/>
          <h3> Programming for Everyone</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/11qMunY_Cmq1Sa6aBqNIp2kBN7tFJZg0-/view?usp=sharing' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>


      <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER1} alt=''/>
          <h3> Java Full Stack</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1aTQc8CT_g5I-9Mspd-SkSAUGHSE3KOXm/view?usp=sharing' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>

        <article className='certification__item'>
          <div className='certification__item-image'></div>
          <img src={CER2} alt=''/>
          <h3>Java J2EE</h3>
          <div className='certification__item-cta'>
          <a href='https://drive.google.com/file/d/1O7izJF5jOBsjX5-jYNbK-Jg6tQVd38ZH/view?usp=drive_link' className='btn btn-primary' target='_blank'>Link to certificate</a>
          </div>
        </article>

       

      

    

      
        
        
        
      </div>
    </section>
  )
}

export default certifications