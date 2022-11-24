import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../contexts/auth.context';
import '../Auth/Auth.css';


const Register = () => {
    const {createUser, updateUserProfile, signInWithGithub, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [userInfo, setUserInfo] = useState({
        email: "",
        name: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: ""
    })

    const handleEmail = (e) => {
        const email = e.target.value;
        console.log(email);
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          setErrors({...errors, email: "Please provide a valid email"});
          setUserInfo({...userInfo, email: ''});
        } else {
          setErrors({...errors, email: ''});
          setUserInfo({...userInfo, email: e.target.value});
        }
    }

    const handleName = (e) => {
        const name = e.target.value;
        console.log(name);
        setUserInfo({...userInfo, name: e.target.value});
    }

    const handlePassword = (e) => {
        const password = e.target.value;
        console.log(password);
    
        const lengthError = password.length < 6;
        const noSymbolError = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);
        const noCapitalLetterError = !/[A-Z]{1,}/.test(password);
    
        if(lengthError) {
          setErrors({...errors, password: 'Must be at least 6 character'});
          setUserInfo({...userInfo, password: ''});
        } else if(noSymbolError) {
          setErrors({...errors, password: 'At least 1 Especial character'});
          setUserInfo({...userInfo, password: ''})
        } else if(noCapitalLetterError) {
          setErrors({...errors, password: 'At least 1 Uppercase character'});
          setUserInfo({...userInfo, password: ''});
        } else {
          setErrors({...errors, password: ''});
          setUserInfo({...userInfo, password: e.target.value});
        }
      }

      const handleUpdateUserProfile = (name) => {
        const profile = {
          displayName: name,
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
      }  

      // handle form
    const handleSubmit = (e) => {
        e.preventDefault();

        createUser(userInfo.email, userInfo.password)
        .then(result => {
          const user = result.user;
          console.log(user);
          swal({ title: "Registered successfully!",icon: "success", });
          navigate('/login');
          handleUpdateUserProfile(userInfo.name);
        })
        .catch(error => {
          console.error(error);
          setErrors({...errors, general:error.message})
        })
    }

    // handle google sing in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
          const user = result.user;
          console.log(user);
          swal({ title: "Google Sign Up!",icon: "success", });
          navigate(location?.state?.from?.pathname || '/');
        })
        .catch(error => console.error(error))
      }
  
      // handle github sing in
      const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result => {
          const user = result.user;
          console.log(user);
          swal({ title: "github Sign Up!",icon: "success", });
          navigate(location?.state?.from?.pathname || '/');
        })
        .catch(error => console.error(error))
      }



    return (
        <div>
            <div className="pm-container-fluid bg-[#f2f2f2]">

                <div className="pm-main-sign-up lg:pl-[392px]">
                    <div className="left-section">
                        <iframe title='animation' className='w-full h-full' src="https://embed.lottiefiles.com/animation/70315"></iframe>
                    </div>

                <div className="right-section ">
                    <div className="heading">
                        <h4>Create Account</h4>
                        <div className="sign-in-link-container">
                            <div><Link className="pmt_sign-in-instead-lnk" id="sign-in-link" to="/login">Sign In</Link> instead?</div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} id="sign-up-form">
                        <div className="pm-form-group">
                            <label htmlFor="email" className="pm-form-label">Email</label>
                            <input onChange={handleEmail} type="email" className="pm-form-control focus:border-orange-400" id="email" name="email" autoFocus="" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                            {errors.email && <p className="t-red error-message">{errors.email}</p>}
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="name" className="pm-form-label">Name</label>
                            <input onChange={handleName} type="text" className="pm-form-control focus:border-orange-400" id="name" name="name" autoComplete="off" autoCapitalize="none" spellCheck="true" required />
                        </div>
                        <div className="pm-form-group">
                            <label htmlFor="password" className="pm-form-label">Password
                            <span id="show-password" className="show-password">SHOW</span>
                            </label>
                            <input onChange={handlePassword} type="password" className="pm-form-control focus:border-orange-400" id="password" name="password" required />
                            {errors.password && <p className='t-red error-message'>{errors.password}</p>}
                        </div>

                        <p id="terms-and-privacy">By creating an account, I agree to the
                            <Link to='' rel="noreferrer">Terms</Link>
                            <span> and </span>
                            <Link to='' rel="noreferrer">Privacy Policy</Link>.
                        </p>

                        <div className="pm-form-group">
                            <button type="submit" className="bg-orange-500 pmt_sign-up-btn pm-btn pm-btn-primary sign-up-btn g-recaptcha" id="sign-up-btn">
                            Sign Up
                            </button>
                            {errors.general && <p className='t-red error-message'>{errors.general}</p>}
                        </div>
                    </form>

                    <div className="pm-awesome-divider-div">
                        <div className="pm-awesome-divider" data-label="or">or</div>
                    </div>

                    {/* google sing up */}
                    <button onClick={handleGoogleSignIn}  className="pm-btn pm-btn-info google-sign-up">
                        <div className="google-logo">
                        <svg data-v-7db52544="" width="18" height="18" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3"><g data-v-7db52544="" clipPath="url(#clip0_5157_4596)"><path data-v-7db52544="" d="M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z" fill="#4285F4"></path> <path data-v-7db52544="" d="M12.7401 24.0008C15.9766 24.0008 18.7059 22.9382 20.6945 21.1039L16.8276 18.1055C15.7517 18.8375 14.3627 19.252 12.7445 19.252C9.61388 19.252 6.95946 17.1399 6.00705 14.3003H2.0166V17.3912C4.05371 21.4434 8.2029 24.0008 12.7401 24.0008Z" fill="#34A853"></path> <path data-v-7db52544="" d="M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z" fill="#FBBC04"></path> <path data-v-7db52544="" d="M12.7401 4.74966C14.4509 4.7232 16.1044 5.36697 17.3434 6.54867L20.7695 3.12262C18.6001 1.0855 15.7208 -0.034466 12.7401 0.000808666C8.2029 0.000808666 4.05371 2.55822 2.0166 6.61481L6.00264 9.70575C6.95064 6.86173 9.60947 4.74966 12.7401 4.74966Z" fill="#EA4335"></path></g> <defs data-v-7db52544=""><clipPath data-v-7db52544="" id="clip0_5157_4596"><rect data-v-7db52544="" width="24" height="24" fill="white" transform="translate(0.5)"></rect></clipPath></defs></svg>
                        </div>
                        <div className="google-text">
                            <div className="pmt_sign-up-w-google-btn">Sign up with Google</div>
                        </div>
                    </button>
                    <button onClick={handleGithubSignIn}  className="pm-btn pm-btn-info google-sign-up">
                        <div className="google-logo">
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 32 32'
                            className='w-5 h-5 mr-3 fill-current bg-gray-900'
                        >
                            <path d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'></path>
                        </svg>
                        </div>
                        <div className="google-text">
                            <div className="pmt_sign-up-w-google-btn">Sign up with Github</div>
                        </div>
                    </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;