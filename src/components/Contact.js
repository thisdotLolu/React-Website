import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import './ContactStyles.css'


const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="col-1">
                <div className="content">
                    <div><h2>Get In Touch</h2></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia illum eos iure, ullam maiores tenetur vitae laboriosam dolorum ipsa possimus soluta distinctio?</p>
                </div>
                <div className='address'>
                    <p>742 evergreen Terrace</p>
                    <p>Springfield, 0RLANDO.</p>
                </div>
                <div className="icons">
                    <FaPhone style={{marginRight:'1rem'}}/>
                    <p>+1 (555) 123-4567</p>
                </div>
                <div className="icons">
                    <FaEnvelope style={{marginRight:'1rem'}}/>
                    <p>invitadisputa@gmail.com</p>
                </div>
                <div className="careers">
                    <p>We are hiring!</p><span>View Job Openings</span>
                </div>
            </div>
        </div>
        <div className="col-2">
            <form action="">
                <input type="text"
                placeholder='full name'
                />
                <input type="email"
                placeholder='Email'
                />
                <input type="phone"
                placeholder='Phone'
                />
                <textarea name="Message" cols="30" rows="10"
                placeholder='Message'
                ></textarea>
                <div className='checkbox'>
                    <input type="checkbox" />
                    <p>By checking this box, you agree to the <span>Privacy Policy</span> and
                    <span>Cookie Policy</span>.
                    </p>
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact