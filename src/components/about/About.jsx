import React from 'react'
import './About.css'
import Piyakornact2 from '../../assets/piyakornact2.png'
import {AiFillFolderOpen} from 'react-icons/ai'
import {FaAward} from 'react-icons/fa'
import {BsPeopleFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={Piyakornact2} alt=''/>
          </div>
        </div>
        <div className='about_content'>
        {/* กรอบcards */}
          <div className='about_cards'> 
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Studying for a bachelor's degree</small>
            </article>
            <article className='about_card'>
              <BsPeopleFill className='about_icon'/>
              <h5>My Family</h5>
              <small>5 People</small>
            </article>
            <article className='about_card'>
              <AiFillFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>3+Completed 2Remaining</small>
            </article>
          </div>
          {/* กรอบcards */}
          <p>
            I'm interesting to create and develope Website & Applications
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About