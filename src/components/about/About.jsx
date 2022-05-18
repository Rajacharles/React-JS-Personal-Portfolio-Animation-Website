import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {RiUserStarLine} from 'react-icons/ri'
import {HiOutlineDocumentReport} from 'react-icons/hi'

const About = () => {
  return (
    <section id='about'>
      <h5>Im a Designer</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>2.5+ Years</small>
            </article>

            <article className='about__card'>
              <HiOutlineDocumentReport className='about__icon' />
              <h5>Projects</h5>
              <small>450+ Completed</small>
            </article>

            <article className='about__card'>
              <RiUserStarLine className='about__icon' />
              <h5>Clients</h5>
              <small>150+ Worldwide</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo aperiam voluptatibus ad, sunt illum? Libero nihil recusandae, quam, esse adipisci deleniti voluptatum aliquam obcaecati, voluptates assumenda delectus aliquid atque.
          </p>

          <a href="#contact" className='btn btn-primary'>Reach Me</a>
        </div>
      </div>
    </section>
  )
}

export default About