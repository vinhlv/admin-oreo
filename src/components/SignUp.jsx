import React from 'react';
import { Link } from 'react-router-dom';
import login from '../assets/images/login.jpg';
import logo from '../assets/images/logo.svg';


class SignUp extends React.Component {
	componentDidMount() {
   	document.body.classList.add("authentication");
   	document.body.classList.add("sidebar-collapse");
	}
	componentWillUnmount() {
   	document.body.classList.remove("authentication");
   	document.body.classList.remove("sidebar-collapse");
	}
  render() {
  	return (
  		<div>
			  <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
			    <div className="container">
			        <div className="navbar-translate n_logo">
			            <Link className="navbar-brand" to="/sign-up" title="">Oreo</Link>
			            <button className="navbar-toggler" type="button">
			                <span className="navbar-toggler-bar bar1"></span>
			                <span className="navbar-toggler-bar bar2"></span>
			                <span className="navbar-toggler-bar bar3"></span>
			            </button>
			        </div>
			        <div className="navbar-collapse">
			            <ul className="navbar-nav">
			                <li className="nav-item">
			                    <Link className="nav-link" to="/home">Home</Link>
			                </li>
			                <li className="nav-item">
			                    <Link className="nav-link" to="/sign-up">Search Result</Link>
			                </li>
			                <li className="nav-item">
			                    <Link className="nav-link" title="Follow us on Twitter" to="/sign-up">
			                        <i className="zmdi zmdi-twitter"></i>
			                        <p className="d-lg-none d-xl-none">Twitter</p>
			                    </Link>
			                </li>
			                <li className="nav-item">
			                    <Link className="nav-link" title="Like us on Facebook" to="/sign-up">
			                        <i className="zmdi zmdi-facebook"></i>
			                        <p className="d-lg-none d-xl-none">Facebook</p>
			                    </Link>
			                </li>
			                <li className="nav-item">
			                    <Link className="nav-link" title="Follow us on Instagram" to="/sign-up">
			                        <i className="zmdi zmdi-instagram"></i>
			                        <p className="d-lg-none d-xl-none">Instagram</p>
			                    </Link>
			                </li>
			                <li className="nav-item">
			                    <Link className="nav-link btn btn-white btn-round" to="/sign-in">SIGN IN</Link>
			                </li>
			            </ul>
			        </div>
			    </div>
				</nav>

				<div className="page-header">
				    <div className="page-header-image" style={{backgroundImage:`url(${login})`}}></div>
				    <div className="container">
			        <div className="col-md-12 content-center">
			            <div className="card-plain">
			                <form className="form" method="" action="#">
			                    <div className="header">
			                        <div className="logo-container">
			                            <img src={logo} alt=""/>
			                        </div>
			                        <h5>Sign Up</h5>
			                        <span>Register a new membership</span>
			                    </div>
			                    <div className="content">
			                        <div className="input-group">
			                            <input type="text" className="form-control" placeholder="Enter User Name"/>
			                            <span className="input-group-addon">
			                                <i className="zmdi zmdi-account-circle"></i>
			                            </span>
			                        </div>
			                        <div className="input-group">
			                            <input type="text" className="form-control" placeholder="Enter Email"/>
			                            <span className="input-group-addon">
			                                <i className="zmdi zmdi-email"></i>
			                            </span>
			                        </div>
			                        <div className="input-group">
			                            <input type="password" placeholder="Password" className="form-control" />
			                            <span className="input-group-addon">
			                                <i className="zmdi zmdi-lock"></i>
			                            </span>
			                        </div>
			                    </div>
			                    <div className="checkbox">
			                            <input id="terms" type="checkbox"/>
			                            <label for="terms">
			                                    I read and agree to the <Link to="/sign-up">terms of usage</Link>
			                            </label>
			                        </div>
			                    <div className="footer text-center">
			                        <Link to="/home" className="btn btn-primary btn-round btn-lg btn-block waves-effect waves-light">SIGN UP</Link>
			                    </div>
			                </form>
			            </div>
			        </div>
			    	</div>
				    <footer className="footer">
				        <div className="container">
				            <nav>
				                <ul>
				                    <li><a href="http://thememakker.com/contact/" target="_blank"  rel="noopener noreferrer">Contact Us</a></li>
				                    <li><a href="http://thememakker.com/about/" target="_blank" rel="noopener noreferrer">About Us</a></li>
				                    <li><a href="http://thememakker.com/about/">FAQ</a></li>
				                </ul>
				            </nav>
				            <div className="copyright">
				                &copy;
				                {new Date().getFullYear()},
				                <span>Designed by <a href="http://thememakker.com/" target="_blank" rel="noopener noreferrer">ThemeMakker</a></span>
				            </div>
				        </div>
				    </footer>
				</div>
			</div>
  	);
	}
}

export default SignUp;
