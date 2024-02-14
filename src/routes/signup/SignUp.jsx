import React from 'react'
import './SignUp.css'
import MathmysticPet from '../../assets/img/MathmysticPet.png';
import { NavBarWoutMenu } from '../../components';
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1050px)'
      })

  return (
    <div>
        <NavBarWoutMenu/>
        <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure>{isDesktopOrLaptop ? <img src={MathmysticPet} alt="sing up image"/> : ""}</figure>
                        <Link to={'/login'} className='signup-image-link'>I am already</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SignUp
