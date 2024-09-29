import React from 'react'
import './experience.css'
import {SiHtml5} from 'react-icons/si'
import {BsFiletypeCss} from 'react-icons/bs'
import {IoLogoJavascript} from 'react-icons/io'
import {RiReactjsLine} from 'react-icons/ri'
import { RiAngularjsFill } from 'react-icons/ri'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {BiLogoSpringBoot} from 'react-icons/bi'
import {SiEnterprisedb} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import { SiHibernate } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
               <SiHtml5 className='experience__details-icon'/>
               <div>
                <h4>HTML</h4>
                </div>
            </article>
            <article className='experience__details'>
               < BsFiletypeCss className='experience__details-icon'/>
               <div>
               <h4>CSS</h4>
               </div>
            </article>
            <article className='experience__details'>
               <IoLogoJavascript className='experience__details-icon'/>
               <div>
               <h4>JavaScript</h4>
               </div>
            </article>
            <article className='experience__details'>
               <RiReactjsLine className='experience__details-icon'/>
               <div>
               <h4>ReactJs</h4>
               </div>
            </article>
            <article className='experience__details'>
               <RiAngularjsFill className='experience__details-icon'/>
               <div>
               <h4>Angular</h4>
               </div>
            </article>
            <article className='experience__details'>
               <BsFillBootstrapFill className='experience__details-icon'/>
               <div>
               <h4>Bootstrap</h4>
               </div>
            </article>
          </div>


        </div>
        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
               <BiLogoSpringBoot className='experience__details-icon' />
               <div>
               <h4>SpringBoot</h4>
               </div>
            </article>
            
            <article className='experience__details'>
               <FaJava className='experience__details-icon'/>
               <div>
               <h4>Java</h4>
               </div>
            </article>
            <article className='experience__details'>
               <SiHibernate className='experience__details-icon'/>
               <div>
               <h4>Hibernate</h4>
               </div>
            </article>
            <article className='experience__details'>
               < SiEnterprisedb className='experience__details-icon'/>
               <div>
               <h4>Python</h4>
               </div>
            </article>
            <article className='experience__details'>
               <SiMysql className='experience__details-icon'/>
               <div>
               <h4>MySQL</h4>
               </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience