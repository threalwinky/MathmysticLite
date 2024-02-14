import React from 'react'
import './LogIn.css'
import { Link } from 'react-router-dom'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import { NavBarWoutMenu } from '../../components';
import { useMediaQuery } from 'react-responsive'

const LogIn = () => {

    
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1050px)'
  })


    return (
        <div className='signin'>
            <NavBarWoutMenu />
            <div class="signin-body">
                <div class="container">
                    <div class="signin-content">
                        <div class="signin-image">
                            <figure>{isDesktopOrLaptop ? <img src={MathmysticPet} alt="sing up image" /> : ""}</figure>
                            <Link to={'/signup'} className='signup-image-link'>Create an account</Link>
                        </div>

                        <div class="signin-form">
                            <h2 class="form-title">Sign In</h2>
                            <form method="POST" class="register-form" id="login-form">
                                <div class="form-group">
                                    <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
                                </div>
                                <div class="form-group">
                                    <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                                    <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                                </div>
                                <div class="form-group form-button">
                                    <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
                                </div>
                            </form>
                            <div class="social-login">
                                <span class="social-label">Or login with</span>
                                <ul class="socials">
                                    <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn
