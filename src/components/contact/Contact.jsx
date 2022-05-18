import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMarkEmailUnread className='contact_option-icon' />
            <h4>Email</h4>
            <h5>email@gmail.com</h5>
            <a href="mailto:email@gmail.com" target="_blank"> Send a message</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>email@gmail.com</h5>
            <a href="https://m.me/iamrajacharles" target="_blank"> Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+123456789" target="_blank"> Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact