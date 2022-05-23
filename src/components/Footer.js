import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="col solutions">
                <h6>Solutions</h6>
                <ul>
                    <li><Link to='/' className='link'>Marketing</Link></li>
                    <li><Link to='/' className='link'>Analytics</Link></li>
                    <li><Link to='/' className='link'>Commerce</Link></li>
                    <li><Link to='/' className='link'>Insights</Link></li>
                    <li><Link to='/' className='link'>Testimonials</Link></li>
                    <li><Link to='/' className='link'>Developer</Link></li>
                </ul>
            </div>
            <div className="col support">
                <h6>Solutions</h6>
                <ul>
                    <li><Link to='/' className='link'>Pricing</Link></li>
                    <li><Link to='/' className='link'>Documentation</Link></li>
                    <li><Link to='/' className='link'>Guides</Link></li>
                    <li><Link to='/'className='link'>API status</Link></li>
                </ul>
            </div>
            <div className="col company">
                <h6>Solutions</h6>
                <ul>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    <li><Link to='/'>Jobs</Link></li>
                    <li><Link to='/'>Press</Link></li>
                </ul>
            </div>
            <div className="col legal">
                <h6>Solutions</h6>
                <ul>
                    <li><Link to='/'>Claim</Link></li>
                    <li><Link to='/'>Privacy</Link></li>
                    <li><Link to='/'>Cookies</Link></li>
                    <li><Link to='/'>Terms</Link></li>
                </ul>
            </div>
            <div className="col-subscribe">
                <h6>subscribe to our newsletter</h6>
                <p>The latest news, articles, and resources sent to your inbox weekly.</p>
                <div className="subscribe">
                    <input type="email" name="Email" placeholder='Enter your e-mail' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className="content">
                <div className="rights">
                    <p>&copy; Workflow, Inc. All rights reserved.</p>
                </div>
            </div>
            <FaFacebook size={20} style={{color:'#d3d3d3', marginRight:'10px'}}/>
            <FaInstagram size={20} style={{color:'#d3d3d3', marginRight:'10px'}}/>
            <FaTwitter size={20} style={{color:'#d3d3d3', marginRight:'10px'}}/>
            <FaGithub size={20} style={{color:'#d3d3d3', marginRight:'10px'}}/>
        </div>
    </div>
  )
}

export default Footer