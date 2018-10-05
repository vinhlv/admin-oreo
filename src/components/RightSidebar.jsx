import React from 'react';
import { Link } from 'react-router-dom';
import avatar1 from '../assets/images/xs/avatar1.jpg';
import avatar2 from '../assets/images/xs/avatar2.jpg';
import avatar3 from '../assets/images/xs/avatar3.jpg';
import avatar4 from '../assets/images/xs/avatar4.jpg';
import avatar5 from '../assets/images/xs/avatar5.jpg';
import avatar6 from '../assets/images/xs/avatar6.jpg';
import avatar7 from '../assets/images/xs/avatar7.jpg';
import avatar8 from '../assets/images/xs/avatar8.jpg';
import avatar9 from '../assets/images/xs/avatar9.jpg';
import avatar10 from '../assets/images/xs/avatar10.jpg';

class RightSidebar extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      dashboardShow: true
    };
  }
  handleToggle(name) {
		this.setState({[name]: !this.state[name]});
	}
	render() {
		let {dashboardShow} = this.state;
		let {isOpen} = this.props;
		return (
			<aside id="rightsidebar" className={`right-sidebar ${isOpen && 'open'}`}>
		    <ul className="nav nav-tabs">
		        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#setting"><i className="zmdi zmdi-settings zmdi-hc-spin"></i></a></li>
		        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#chat"><i className="zmdi zmdi-comments"></i></a></li>
		        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#activity">Activity</a></li>
		    </ul>
		    <div className="tab-content">
		        <div className="tab-pane slideRight active" id="setting">
		            <div className="slim_scroll">
		                <div className="card">
		                    <h6>General Settings</h6>
		                    <ul className="setting-list list-unstyled">
		                        <li>
		                            <div className="checkbox">
		                                <input id="checkbox1" type="checkbox"/>
		                                <label htmlFor="checkbox1">Report Panel Usage</label>
		                            </div>
		                        </li>
		                        <li>
		                            <div className="checkbox">
		                                <input id="checkbox2" type="checkbox" defaultChecked/>
		                                <label htmlFor="checkbox2">Email Redirect</label>
		                            </div>
		                        </li>
		                        <li>
		                            <div className="checkbox">
		                                <input id="checkbox3" type="checkbox" defaultChecked/>
		                                <label htmlFor="checkbox3">Notifications</label>
		                            </div>
		                        </li>
		                        <li>
		                            <div className="checkbox">
		                                <input id="checkbox4" type="checkbox" defaultChecked/>
		                                <label htmlFor="checkbox4">Auto Updates</label>
		                            </div>
		                        </li>
		                    </ul>
		                </div>
		                <div className="card">
		                    <h6>Skins</h6>
		                    <ul className="choose-skin list-unstyled">
		                        <li data-theme="purple" className="active">
		                            <div className="purple"></div>
		                        </li>
		                        <li data-theme="blue">
		                            <div className="blue"></div>
		                        </li>
		                        <li data-theme="cyan">
		                            <div className="cyan"></div>
		                        </li>
		                        <li data-theme="green">
		                            <div className="green"></div>
		                        </li>
		                        <li data-theme="orange">
		                            <div className="orange"></div>
		                        </li>
		                        <li data-theme="blush">
		                            <div className="blush"></div>
		                        </li>
		                    </ul>
		                </div>
		                <div className="card">
		                    <h6>Account Settings</h6>
		                    <ul className="setting-list list-unstyled">
		                        <li>
		                            <div className="checkbox">
		                                <input id="checkbox5" type="checkbox" defaultChecked/>
		                                <label htmlFor="checkbox5">Offline</label>
		                            </div>
		                        </li>
		                        <li>
		                            <div className="checkbox">
		                                <input id="checkbox6" type="checkbox" defaultChecked/>
		                                <label htmlFor="checkbox6">Location Permission</label>
		                            </div>
		                        </li>
		                    </ul>
		                </div>
		                <div className="card theme-light-dark">
		                    <h6>Left Menu</h6>
		                    <button className="t-light btn btn-default btn-simple btn-round btn-block">Light</button>
		                    <button className="t-dark btn btn-default btn-round btn-block">Dark</button>
												<button className="m_img_btn btn btn-primary btn-round btn-block">Sidebar Image</button>
		                </div>
		                <div className="card">
		                    <h6>Information Summary</h6>
		                    <div className="row m-b-20">
		                        <div className="col-7">
		                            <small className="displayblock">MEMORY USAGE</small>
		                            <h5 className="m-b-0 h6">512</h5>
		                        </div>
		                        <div className="col-5">
		                            <div className="sparkline" datatype="bar" datawidth="97%" dataheight="25px" databarwidth="5" databarspacing="3" databarcolor="#00ced1">8,7,9,5,6,4,6,8</div>
		                        </div>
		                    </div>
		                    <div className="row m-b-20">
		                        <div className="col-7">
		                            <small className="displayblock">CPU USAGE</small>
		                            <h5 className="m-b-0 h6">90%</h5>
		                        </div>
		                        <div className="col-5">
		                            <div className="sparkline" datatype="bar" datawidth="97%" dataheight="25px" databarwidth="5" databarspacing="3" databarcolor="#F15F79">6,5,8,2,6,4,6,4</div>
		                        </div>
		                    </div>
		                    <div className="row m-b-20">
		                        <div className="col-7">
		                            <small className="displayblock">DAILY TRAFFIC</small>
		                            <h5 className="m-b-0 h6">25 142</h5>
		                        </div>
		                        <div className="col-5">
		                            <div className="sparkline" datatype="bar" datawidth="97%" dataheight="25px" databarwidth="5" databarspacing="3" databarcolor="#78b83e">7,5,8,7,4,2,6,5</div>
		                        </div>
		                    </div>
		                    <div className="row">
		                        <div className="col-7">
		                            <small className="displayblock">DISK USAGE</small>
		                            <h5 className="m-b-0 h6">60.10%</h5>
		                        </div>
		                        <div className="col-5">
		                            <div className="sparkline" datatype="bar" datawidth="97%" dataheight="25px" databarwidth="5" databarspacing="3" databarcolor="#457fca">7,5,2,5,6,7,6,4</div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <div className="tab-pane right_chat stretchLeft" id="chat">
		            <div className="slim_scroll">
		                <div className="card">
		                    <div className="search">
		                        <div className="input-group">
		                            <input type="text" className="form-control" placeholder="Search..."/>
		                            <span className="input-group-addon">
		                                <i className="zmdi zmdi-search"></i>
		                            </span>
		                        </div>
		                    </div>
		                </div>
		                <div className="card">
		                    <h6>Recent</h6>
		                    <ul className="list-unstyled">
		                        <li className="online">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar4} alt=""/>
		                                    <div className="media-body">
		                                        <span className="name">Sophia</span>
		                                        <span className="message">There are many variations of passages of Lorem Ipsum available</span>
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="online">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar5} alt=""/>
		                                    <div className="media-body">
		                                        <span className="name">Grayson</span>
		                                        <span className="message">All the Lorem Ipsum generators on the</span>
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="offline">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar2} alt=""/>
		                                    <div className="media-body">
		                                        <span className="name">Isabella</span>
		                                        <span className="message">Contrary to popular belief, Lorem Ipsum</span>
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="me">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar1} alt=""/>
		                                    <div className="media-body">
		                                        <span className="name">John</span>
		                                        <span className="message">It is a long established fact that a reader</span>
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="online">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar3} alt=""/>
		                                    <div className="media-body">
		                                        <span className="name">Alexander</span>
		                                        <span className="message">Richard McClintock, a Latin professor</span>
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                    </ul>
		                </div>
		                <div className="card">
		                    <h6>Contacts</h6>
		                    <ul className="list-unstyled">
		                        <li className="offline inlineblock">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar10} alt=""/>
		                                    <div className="media-body">
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="offline inlineblock">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar6} alt=""/>
		                                    <div className="media-body">
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="offline inlineblock">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar7} alt=""/>
		                                    <div className="media-body">
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="offline inlineblock">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar8} alt=""/>
		                                    <div className="media-body">
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="offline inlineblock">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar9} alt=""/>
		                                    <div className="media-body">
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="online inlineblock">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar5} alt=""/>
		                                    <div className="media-body">
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="offline inlineblock">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar4} alt=""/>
		                                    <div className="media-body">
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="offline inlineblock">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar3} alt=""/>
		                                    <div className="media-body">
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="online inlineblock">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar2} alt=""/>
		                                    <div className="media-body">
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                        <li className="offline inlineblock">
		                            <a href="javascript:void(0);">
		                                <div className="media">
		                                    <img className="media-object " src={avatar1} alt=""/>
		                                    <div className="media-body">
		                                        <span className="badge badge-outline status"></span>
		                                    </div>
		                                </div>
		                            </a>
		                        </li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		        <div className="tab-pane slideLeft" id="activity">
		            <div className="slim_scroll">
		                <div className="card user_activity">
		                    <h6>Recent Activity</h6>
		                    <div className="streamline b-accent">
		                        <div className="sl-item">
		                            <img className="user rounded-circle" src={avatar4} alt=""/>
		                            <div className="sl-content">
		                                <h5 className="m-b-0">Admin Birthday</h5>
		                                <small>Jan 21 <a href="javascript:void(0);" className="text-info">Sophia</a>.</small>
		                            </div>
		                        </div>
		                        <div className="sl-item">
		                            <img className="user rounded-circle" src={avatar5} alt=""/>
		                            <div className="sl-content">
		                                <h5 className="m-b-0">Add New Contact</h5>
		                                <small>30min ago <a href="javascript:void(0);">Alexander</a>.</small>
		                                <small><strong>P:</strong> +264-625-2323</small>
		                                <small><strong>E:</strong> maryamamiri@gmail.com</small>
		                            </div>
		                        </div>
		                        <div className="sl-item">
		                            <img className="user rounded-circle" src={avatar6} alt=""/>
		                            <div className="sl-content">
		                                <h5 className="m-b-0">Code Change</h5>
		                                <small>Today <a href="javascript:void(0);">Grayson</a>.</small>
		                                <small>The standard chunk of Lorem Ipsum used since the 1500s is reproduced</small>
		                            </div>
		                        </div>
		                        <div className="sl-item">
		                            <img className="user rounded-circle" src={avatar7} alt=""/>
		                            <div className="sl-content">
		                                <h5 className="m-b-0">New Email</h5>
		                                <small>45min ago <a href="javascript:void(0);" className="text-info">Fidel Tonn</a>.</small>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="card">
		                    <h6>Recent Attachments</h6>
		                    <ul className="list-unstyled activity">
		                        <li>
		                            <a href="javascript:void(0)">
		                                <i className="zmdi zmdi-collection-pdf l-blush"></i>
		                                <div className="info">
		                                    <h4>info_258.pdf</h4>
		                                    <small>2MB</small>
		                                </div>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="javascript:void(0)">
		                                <i className="zmdi zmdi-collection-text l-amber"></i>
		                                <div className="info">
		                                    <h4>newdoc_214.doc</h4>
		                                    <small>900KB</small>
		                                </div>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="javascript:void(0)">
		                                <i className="zmdi zmdi-image l-parpl"></i>
		                                <div className="info">
		                                    <h4>MG_4145.jpg</h4>
		                                    <small>5.6MB</small>
		                                </div>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="javascript:void(0)">
		                                <i className="zmdi zmdi-image l-parpl"></i>
		                                <div className="info">
		                                    <h4>MG_4100.jpg</h4>
		                                    <small>5MB</small>
		                                </div>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="javascript:void(0)">
		                                <i className="zmdi zmdi-collection-text l-amber"></i>
		                                <div className="info">
		                                    <h4>Reports_end.doc</h4>
		                                    <small>780KB</small>
		                                </div>
		                            </a>
		                        </li>
		                        <li>
		                            <a href="javascript:void(0)">
		                                <i className="zmdi zmdi-videocam l-turquoise"></i>
		                                <div className="info">
		                                    <h4>movie2018.MKV</h4>
		                                    <small>750MB</small>
		                                </div>
		                            </a>
		                        </li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
			</aside>
		);
	}
}

export default RightSidebar;
