import React from 'react';
import { Link } from 'react-router-dom';
import profile_av from '../assets/images/profile_av.jpg';

class LeftSidebar extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      dashboardShow: true,
      menuDashboard: false,
    };
  }
  handleToggle(name) {
		this.setState({[name]: !this.state[name]});
	}
	render() {
		let {dashboardShow, menuDashboard} = this.state;
		let show = {display: 'block'};
		let hide = {display: 'none'};
		return (
			<aside id="leftsidebar" className="sidebar">
		    <ul className="nav nav-tabs">
		        <li className="nav-item"><Link to='/home' className={`nav-link ${dashboardShow && 'active'}`} onClick={this.handleToggle.bind(this, 'dashboardShow')} ><i className="zmdi zmdi-home m-r-5"></i>Oreo</Link></li>
		        <li className="nav-item"><Link to='/home' className={`nav-link ${dashboardShow === false && 'active'}`} onClick={this.handleToggle.bind(this, 'dashboardShow')} ><i className="zmdi zmdi-account m-r-5"></i>User</Link></li>
		    </ul>
		    <div className="tab-content">
		        <div className={`tab-pane stretchRight ${dashboardShow && 'active show'}`} id="dashboard">
		            <div className="menu">
		                <ul className="list">
		                    <li>
		                        <div className="user-info">
		                            <div className="image"><a href="profile.html"><img src={profile_av} alt="User"/></a></div>
		                            <div className="detail">
		                                <h4>Michael</h4>
		                                <small>UI UX Designer</small>
		                            </div>
		                            <a title="facebook" href="https://www.facebook.com"><i className="zmdi zmdi-facebook"></i></a>
		                            <a title="twitter" href="https://twitter.com"><i className="zmdi zmdi-twitter"></i></a>
		                            <a title="instagram" href="https://www.instagram.com"><i className="zmdi zmdi-instagram"></i></a>
		                        </div>
		                    </li>
		                    <li className="header">MAIN</li>
		                    <li className="active open"> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-home"></i><span>Dashboard</span></a>
		                        <ul className="ml-menu">
		                            <li className="active"><a href="index.html">Main</a> </li>
		                            <li><a href="dashboard-rtl.html">RTL</a></li>
		                            <li><a href="index2.html">Horizontal</a></li>
		                            <li><a href="ec-dashboard.html">Ecommerce</a></li>
		                            <li><a href="blog-dashboard.html">Blog</a></li>
		                        </ul>
		                    </li>
		                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-apps"></i><span>App</span> </a>
		                        <ul className="ml-menu">
		                            <li><a href="mail-inbox.html">Inbox</a></li>
		                            <li><a href="chat.html">Chat</a></li>
		                            <li><a href="events.html">Calendar</a></li>
		                            <li><a href="file-dashboard.html">File Manager</a></li>
		                            <li><a href="contact.html">Contact list</a></li>
		                            <li><a href="blog-dashboard.html">Blog</a></li>
		                        </ul>
		                    </li>
		                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-shopping-cart"></i><span>Ecommerce</span> </a>
		                        <ul className="ml-menu">
		                            <li> <a href="ec-dashboard.html">Dashboard</a></li>
		                            <li> <a href="ec-product.html">Product</a></li>
		                            <li> <a href="ec-product-List.html">Product List</a></li>
		                            <li> <a href="ec-product-detail.html">Product detail</a></li>
		                        </ul>
		                    </li>
		                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-swap-alt"></i><span>User Interface (UI)</span> </a>
		                        <ul className="ml-menu">
		                            <li> <a href="ui_kit.html">UI KIT</a> </li>
		                            <li> <a href="alerts.html">Alerts</a> </li>
		                            <li> <a href="collapse.html">Collapse</a> </li>
		                            <li> <a href="colors.html">Colors</a> </li>
		                            <li> <a href="dialogs.html">Dialogs</a> </li>
		                            <li> <a href="icons.html">Icons</a> </li>
		                            <li> <a href="list-group.html">List Group</a> </li>
		                            <li> <a href="media-object.html">Media Object</a> </li>
		                            <li> <a href="modals.html">Modals</a> </li>
		                            <li> <a href="notifications.html">Notifications</a></li>
		                            <li> <a href="progressbars.html">Progress Bars</a></li>
		                            <li> <a href="range-sliders.html">Range Sliders</a></li>
		                            <li> <a href="sortable-nestable.html">Sortable & Nestable</a></li>
		                            <li> <a href="tabs.html">Tabs</a></li>
		                            <li> <a href="waves.html">Waves</a></li>
		                        </ul>
		                    </li>
		                    <li className="header">FORMS, CHARTS, TABLES</li>
		                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-assignment"></i><span>Forms</span> </a>
		                        <ul className="ml-menu">
		                            <li><a href="basic-form-elements.html">Basic Elements</a> </li>
		                            <li><a href="advanced-form-elements.html">Advanced Elements</a> </li>
		                            <li><a href="form-examples.html">Form Examples</a> </li>
		                            <li><a href="form-validation.html">Form Validation</a> </li>
		                            <li><a href="form-wizard.html">Form Wizard</a> </li>
		                            <li><a href="form-editors.html">Editors</a> </li>
		                            <li><a href="form-upload.html">File Upload</a></li>
		                        </ul>
		                    </li>
		                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-grid"></i><span>Tables</span> </a>
		                        <ul className="ml-menu">
		                            <li> <a href="normal-tables.html">Normal Tables</a> </li>
		                            <li> <a href="jquery-datatable.html">Jquery Datatables</a> </li>
		                            <li> <a href="editable-table.html">Editable Tables</a> </li>

		                            <li> <a href="table-color.html">Tables Color</a> </li>
		                        </ul>
		                    </li>
		                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-chart"></i><span>Charts</span> </a>
		                        <ul className="ml-menu">
		                            <li> <a href="morris.html">Morris</a> </li>
		                            <li> <a href="flot.html">Flot</a> </li>
		                            <li> <a href="chartjs.html">ChartJS</a> </li>
		                            <li> <a href="sparkline.html">Sparkline</a> </li>
		                            <li> <a href="jquery-knob.html">Jquery Knob</a> </li>
		                        </ul>
		                    </li>
		                    <li className="header">EXTRA COMPONENTS</li>
		                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-delicious"></i><span>Widgets</span> </a>
		                        <ul className="ml-menu">
		                            <li><a href="widgets-app.html">Apps Widgetse</a></li>
		                            <li><a href="widgets-data.html">Data Widgetse</a></li>
		                        </ul>
		                    </li>
		                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-lock"></i><span>Authentication</span> </a>
		                        <ul className="ml-menu">
		                            <li><a href="sign-in.html">Sign In</a> </li>
		                            <li><a href="sign-up.html">Sign Up</a> </li>
		                            <li><a href="forgot-password.html">Forgot Password</a> </li>
		                            <li><a href="404.html">Page 404</a> </li>
		                            <li><a href="500.html">Page 500</a> </li>
		                            <li><a href="page-offline.html">Page Offline</a> </li>
		                            <li><a href="locked.html">Locked Screen</a> </li>
		                        </ul>
		                    </li>
		                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-copy"></i><span>Sample Pages</span> </a>
		                        <ul className="ml-menu">
		                            <li><a href="blank.html">Blank Page</a> </li>
		                            <li> <a href="image-gallery.html">Image Gallery</a> </li>
		                            <li><a href="profile.html">Profile</a></li>
		                            <li><a href="timeline.html">Timeline</a></li>
		                            <li><a href="pricing.html">Pricing</a></li>
		                            <li><a href="invoices.html">Invoices</a></li>
		                            <li><a href="search-results.html">Search Results</a></li>
		                        </ul>
		                    </li>
		                    <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-map"></i><span>Maps</span> </a>
		                        <ul className="ml-menu">
		                            <li> <a href="google.html">Google Map</a> </li>
		                            <li> <a href="yandex.html">YandexMap</a> </li>
		                            <li> <a href="jvectormap.html">jVectorMap</a> </li>
		                        </ul>
		                    </li>
		                    <li className="header">Extra</li>
		                    <li>
		                        <div className="progress-container progress-primary m-t-10">
		                            <span className="progress-badge">Traffic this Month</span>
		                            <div className="progress">
		                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{width: '67%'}}>
		                                    <span className="progress-value">67%</span>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="progress-container progress-info">
		                            <span className="progress-badge">Server Load</span>
		                            <div className="progress">
		                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: '86%'}}>
		                                    <span className="progress-value">86%</span>
		                                </div>
		                            </div>
		                        </div>
		                    </li>
		                </ul>
		            </div>
		        </div>
		        <div className={`tab-pane stretchLeft ${!dashboardShow && 'active show'}`} id="user">
		            <div className="menu">
		                <ul className="list">
		                    <li>
		                        <div className="user-info m-b-20 p-b-15">
		                            <div className="image"><a href="profile.html"><img src={profile_av} alt="User"/></a></div>
		                            <div className="detail">
		                                <h4>Michael</h4>
		                                <small>UI UX Designer</small>
		                            </div>
		                            <a title="facebook" href="https://www.facebook.com"><i className="zmdi zmdi-facebook"></i></a>
		                            <a title="twitter" href="https://www.twitter.com"><i className="zmdi zmdi-twitter"></i></a>
		                            <a title="instagram" href="https://www.instagram.com"><i className="zmdi zmdi-instagram"></i></a>
		                            <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
		                            <div className="row">
		                                <div className="col-4">
		                                    <h5 className="m-b-5">852</h5>
		                                    <small>Following</small>
		                                </div>
		                                <div className="col-4">
		                                    <h5 className="m-b-5">13k</h5>
		                                    <small>Followers</small>
		                                </div>
		                                <div className="col-4">
		                                    <h5 className="m-b-5">234</h5>
		                                    <small>Post</small>
		                                </div>
		                            </div>
		                        </div>
		                    </li>
		                    <li>
		                        <small className="text-muted">Email address: </small>
		                        <p>michael@gmail.com</p>
		                        <hr/>
		                        <small className="text-muted">Phone: </small>
		                        <p>+ 202-555-0191</p>
		                        <hr/>
		                        <ul className="list-unstyled">
		                            <li>
		                                <div>Photoshop</div>
		                                <div className="progress m-b-20">
		                                    <div className="progress-bar l-blue " role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{width: '89%'}}> <span className="sr-only">62% Complete</span> </div>
		                                </div>
		                            </li>
		                            <li>
		                                <div>Wordpress</div>
		                                <div className="progress m-b-20">
		                                    <div className="progress-bar l-green " role="progressbar" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100" style={{width: '56%'}}> <span className="sr-only">87% Complete</span> </div>
		                                </div>
		                            </li>
		                            <li>
		                                <div>HTML 5</div>
		                                <div className="progress m-b-20">
		                                    <div className="progress-bar l-amber" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={{width: '78%'}}> <span className="sr-only">32% Complete</span> </div>
		                                </div>
		                            </li>
		                            <li>
		                                <div>Angular</div>
		                                <div className="progress m-b-20">
		                                    <div className="progress-bar l-blush" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style={{width: '43%'}}> <span className="sr-only">56% Complete</span> </div>
		                                </div>
		                            </li>
		                        </ul>
		                    </li>
		                </ul>
		            </div>
		        </div>
		    </div>
			</aside>
		);
	}
}

export default LeftSidebar;
