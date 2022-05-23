import React from 'react'
import './HeroStyles.css'
import {FaDatabase, FaAsterisk,FaAccusoft,FaFacebook,FaGithub,FaTwitter} from 'react-icons/fa';



const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className="content">
                <div className="col-1">
                    <h1>Data to enrich your</h1>
                    <h1><span className='primary-color'>online business</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates autem quae. Optio, necessitatibus a vitae, odio doloribus sequi ratione non, voluptate sed possimus repellendus saepe voluptas libero accusamus nihil?</p>
                    <div className='used-by'>
                        <p>USED BY</p>
                        <div className='icons'>
                            <i><FaDatabase/>Staxx</i>
                            <i><FaAsterisk/>Star AI</i>
                            <i><FaAccusoft></FaAccusoft>Accusoft</i>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className="form-layout">
                        <div className="form-container">
                            <p className='sign-in-txt'>Sign in With</p>
                            <div className='social-login'>
                                <i><FaFacebook size={20}/></i>
                                <i><FaTwitter size={20}/></i>
                                <i><FaGithub size={20}/></i>
                            </div>
                            <div className='divider'>
                                <p><span>Or</span></p>
                            </div>
                            <form>
                                <input type="text" 
                                placeholder='Name'
                                />
                                <input type="email" 
                                placeholder='Email'
                                />
                                <input type="password" 
                                placeholder='Password'
                                />
                                <button>Create your account</button>
                            </form>
                        </div>
                        <div className="form-footer">
                            <p>By Signing up, you agree to our 
                                <span className='primary-color'>Terms, Data Policy</span> and 
                                <span className='primary-color'>Cookies Policy</span>.  
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero