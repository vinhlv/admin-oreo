import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import avatar2 from '../assets/images/xs/avatar2.jpg';
import avatar3 from '../assets/images/xs/avatar3.jpg';
import avatar4 from '../assets/images/xs/avatar4.jpg';
import avatar5 from '../assets/images/xs/avatar5.jpg';
import avatar6 from '../assets/images/xs/avatar6.jpg';
import avatar7 from '../assets/images/xs/avatar7.jpg';
import avatar8 from '../assets/images/xs/avatar8.jpg';
import avatar9 from '../assets/images/xs/avatar9.jpg';
import avatar10 from '../assets/images/xs/avatar10.jpg';

class Navbar extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      notifyShow: false,
      flagShow: false,
      leftMenuShow: true
    };
  }
	handleToggle(name) {
		if (name === 'leftMenuShow') {
			if (this.state.leftMenuShow) {
				document.body.classList.add("ls-toggle-menu");
			} else {
				document.body.classList.remove("ls-toggle-menu");
			}
		}
		this.setState({[name]: !this.state[name]});
	}

	openFullscreen() {
		let elem = document.documentElement;
	  if (elem.requestFullscreen) {
	    elem.requestFullscreen();
	  } else if (elem.mozRequestFullScreen) { /* Firefox */
	    elem.mozRequestFullScreen();
	  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
	    elem.webkitRequestFullscreen();
	  } else if (elem.msRequestFullscreen) { /* IE/Edge */
	    elem.msRequestFullscreen();
	  }
	}

  render() {
  	let {notifyShow, flagShow} = this.state;
  	return (
		  <nav className="navbar p-l-5 p-r-5">
		    <ul className="nav navbar-nav navbar-left">
		        <li>
		            <div className="navbar-header">
		                <Link to='/home' className="bars"></Link>
		                <Link className="navbar-brand" to="/home">
		                	<img src={logo} width="30" alt="Oreo"/><span className="m-l-10">Oreo</span>
		                </Link>
		            </div>
		        </li>
		        <li><Link to="/home" className="ls-toggle-btn" onClick={this.handleToggle.bind(this, 'leftMenuShow')}><i className="zmdi zmdi-swap"></i></Link></li>
		        <li className="hidden-md-down"><a href="events.html" title="Events"><i className="zmdi zmdi-calendar"></i></a></li>
		        <li className="hidden-md-down"><a href="mail-inbox.html" title="Inbox"><i className="zmdi zmdi-email"></i></a></li>
		        <li><a href="contact.html" title="Contact List"><i className="zmdi zmdi-account-box-phone"></i></a></li>
		        <li className={`dropdown ${notifyShow ? 'show' : ''}`}> <Link to="/home" className="dropdown-toggle" onClick={this.handleToggle.bind(this, 'notifyShow')} role="button"><i className="zmdi zmdi-notifications"></i>
		            <div className="notify"><span className="heartbit"></span><span className="point"></span></div>
		            </Link>
		            <ul className="dropdown-menu pullDown">
		                <li className="body">
		                    <ul className="menu list-unstyled">
		                        <li>
		                            <a href="https://thememakker.com">
		                                <div className="media">
		                                    <img className="media-object" src={avatar2} alt=""/>
		                                    <div className="media-body">
		                                        <span className="name">Sophia <span className="time">30min ago</span></span>
		                                        <span className="message">There are many variations of passages</span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="https://thememakker.com">
		                                <div className="media">
		                                    <img className="media-object" src={avatar3} alt=""/>
		                                    <div className="media-body">
		                                        <span className="name">Sophia <span className="time">31min ago</span></span>
		                                        <span className="message">There are many variations of passages of Lorem Ipsum</span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="https://thememakker.com">
		                                <div className="media">
		                                    <img className="media-object" src={avatar4} alt=""/>
		                                    <div className="media-body">
		                                        <span className="name">Isabella <span className="time">35min ago</span></span>
		                                        <span className="message">There are many variations of passages</span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="https://thememakker.com">
		                                <div className="media">
		                                    <img className="media-object" src={avatar5} alt=""/>
		                                    <div className="media-body">
		                                        <span className="name">Alexander <span className="time">35min ago</span></span>
		                                        <span className="message">Contrary to popular belief, Lorem Ipsum random</span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="https://thememakker.com">
		                                <div className="media">
		                                    <img className="media-object" src={avatar6} alt=""/>
		                                    <div className="media-body">
		                                        <span className="name">Grayson <span className="time">1hr ago</span></span>
		                                        <span className="message">There are many variations of passages</span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                    </ul>
		                </li>
		                <li className="footer"> <a href="https://thememakker.com">View All</a> </li>
		            </ul>
		        </li>
		        <li className={`dropdown ${flagShow ? 'show' : ''}`}> <Link to="/home" className="dropdown-toggle" onClick={this.handleToggle.bind(this, 'notifyShow')} role="button"><i className="zmdi zmdi-flag"></i>
		            <div className="notify">
		                <span className="heartbit"></span>
		                <span className="point"></span>
		            </div>
		            </Link>
		            <ul className="dropdown-menu pullDown">
		                <li className="header">Project</li>
		                <li className="body">
		                    <ul className="menu tasks list-unstyled">
		                        <li>
		                            <a href="https://thememakker.com">
		                                <div className="progress-container progress-primary">
		                                    <span className="progress-badge">eCommerce Website</span>
		                                    <div className="progress">
		                                        <div className="progress-bar" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: '86%'}}>
		                                            <span className="progress-value">86%</span>
		                                        </div>
		                                    </div>
		                                    <ul className="list-unstyled team-info">
		                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
		                                        <li>
		                                            <img src={avatar2} alt="Avatar"/>
		                                        </li>
		                                        <li>
		                                            <img src={avatar3} alt="Avatar"/>
		                                        </li>
		                                        <li>
		                                            <img src={avatar4} alt="Avatar"/>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="https://thememakker.com">
		                                <div className="progress-container progress-info">
		                                    <span className="progress-badge">iOS Game Dev</span>
		                                    <div className="progress">
		                                        <div className="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '45%'}}>
		                                            <span className="progress-value">45%</span>
		                                        </div>
		                                    </div>
		                                    <ul className="list-unstyled team-info">
		                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
		                                        <li>
		                                            <img src={avatar10} alt="Avatar"/>
		                                        </li>
		                                        <li>
		                                            <img src={avatar9} alt="Avatar"/>
		                                        </li>
		                                        <li>
		                                            <img src={avatar8} alt="Avatar"/>
		                                        </li>
		                                        <li>
		                                            <img src={avatar7} alt="Avatar"/>
		                                        </li>
		                                        <li>
		                                            <img src={avatar6} alt="Avatar"/>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="https://thememakker.com">
		                                <div className="progress-container progress-warning">
		                                    <span className="progress-badge">Home Development</span>
		                                    <div className="progress">
		                                        <div className="progress-bar" role="progressbar" aria-valuenow="29" aria-valuemin="0" aria-valuemax="100" style={{width: '29%'}}>
		                                            <span className="progress-value">29%</span>
		                                        </div>
		                                    </div>
		                                    <ul className="list-unstyled team-info">
		                                        <li className="m-r-15"><small className="text-muted">Team</small></li>
		                                        <li>
		                                            <img src={avatar5} alt="Avatar"/>
		                                        </li>
		                                        <li>
		                                            <img src={avatar2} alt="Avatar"/>
		                                        </li>
		                                        <li>
		                                            <img src={avatar7} alt="Avatar"/>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </a>
		                        </li>
		                    </ul>
		                </li>
		                <li className="footer"><a href="https://thememakker.com">View All</a></li>
		            </ul>
		        </li>
		        <li className="hidden-sm-down">
		            <div className="input-group">
		                <input type="text" className="form-control" placeholder="Search..."/>
		                <span className="input-group-addon">
		                    <i className="zmdi zmdi-search"></i>
		                </span>
		            </div>
		        </li>
		        <li className="float-right">
		            <Link to="/home" className="fullscreen hidden-sm-down" onClick={this.openFullscreen.bind(this)}><i className="zmdi zmdi-fullscreen"></i></Link>
		            <Link to="/sign-in" className="mega-menu" ><i className="zmdi zmdi-power"></i></Link>
		            <Link to="/home" className="js-right-sidebar" onClick={this.props.toggleRightMenu}><i className="zmdi zmdi-settings zmdi-hc-spin"></i></Link>
		        </li>
		    </ul>
			</nav>
  	);
	}
}

export default Navbar;
