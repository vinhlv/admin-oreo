import React from 'react';
import avatar1 from '../assets/images/xs/avatar1.jpg';
import avatar2 from '../assets/images/xs/avatar2.jpg';
import avatar3 from '../assets/images/xs/avatar3.jpg';
import avatar4 from '../assets/images/xs/avatar4.jpg';
import avatar5 from '../assets/images/xs/avatar5.jpg';

class Main extends React.Component {
	componentDidMount() {

	}
	render() {
		return (
			<section className="content home">
		    <div className="block-header">
		        <div className="row">
		            <div className="col-lg-5 col-md-5 col-sm-12">
		                <h2>Dashboard
		                <small>Welcome to Oreo</small>
		                </h2>
		            </div>
		            <div className="col-lg-7 col-md-7 col-sm-12 text-right">
		                <div className="inlineblock text-center m-r-15 m-l-15 hidden-md-down">
		                    <div className="sparkline" datatype="bar" datawidth="97%" dataheight="25px" databarwidth="2" databarspacing="5" databarcolor="#fff">3,2,6,5,9,8,7,9,5,1,3,5,7,4,6</div>
		                    <small className="col-white">Visitors</small>
		                </div>
		                <div className="inlineblock text-center m-r-15 m-l-15 hidden-md-down">
		                    <div className="sparkline" datatype="bar" datawidth="97%" dataheight="25px" databarwidth="2" databarspacing="5" databarcolor="#fff">1,3,5,7,4,6,3,2,6,5,9,8,7,9,5</div>
		                    <small className="col-white">Bounce Rate</small>
		                </div>
		                <button className="btn btn-white btn-icon btn-round hidden-sm-down float-right m-l-10" type="button">
		                    <i className="zmdi zmdi-plus"></i>
		                </button>
		                <ul className="breadcrumb float-md-right">
		                    <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home"></i> Oreo</a></li>
		                    <li className="breadcrumb-item active">Dashboard</li>
		                </ul>
		            </div>
		        </div>
		    </div>
		    <div className="container-fluid">
		        <div className="row clearfix">
		            <div className="col-sm-12">
		                <div className="card">
		                    <div className="body">
		                        <div className="row clearfix">
		                            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
		                                <div className="body">
		                                    <h2 className="number count-to m-t-0 m-b-5" datafrom="0" datato="501" dataspeed="1000" datafreshinterval="700">501</h2>
		                                    <p className="text-muted">Orders Received</p>
		                                    <span id="linecustom1">1,4,2,6,5,2,3,8,5,2</span>
		                                </div>
		                            </div>
		                            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
		                                <div className="body">
		                                    <h2 className="number count-to m-t-0 m-b-5" datafrom="0" datato="2501" dataspeed="2000" datafreshinterval="700">2501</h2>
		                                    <p className="text-muted ">Total Sales</p>
		                                    <span id="linecustom2">2,9,5,5,8,5,4,2,6</span>
		                                </div>
		                            </div>
		                            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
		                                <div className="body">
		                                    <h2 className="number count-to m-t-0 m-b-5" datafrom="0" datato="6051" dataspeed="2000" datafreshinterval="700">6051</h2>
		                                    <p className="text-muted">Total Profit</p>
		                                    <span id="linecustom3">1,5,3,6,6,3,6,8,4,2</span>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <div className="row clearfix">
		            <div className="col-lg-12">
		                <div className="card">
		                    <div className="header">
		                        <h2><strong>Sales</strong> Report</h2>
		                        <ul className="header-dropdown">
		                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
		                                <ul className="dropdown-menu slideUp float-right">
		                                    <li><a href="javascript:void(0);">Edit</a></li>
		                                    <li><a href="javascript:void(0);">Delete</a></li>
		                                    <li><a href="javascript:void(0);">Report</a></li>
		                                </ul>
		                            </li>
		                            <li className="remove">
		                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
		                            </li>
		                        </ul>
		                    </div>
		                    <div className="body">
		                        <div className="row text-center">
		                            <div className="col-sm-3 col-6">
		                                <h4 className="margin-0">$ 106 <i className="zmdi zmdi-trending-up col-green"></i></h4>
		                                <p className="text-muted"> Today's Sales</p>
		                            </div>
		                            <div className="col-sm-3 col-6">
		                                <h4 className="margin-0">$ 907 <i className="zmdi zmdi-trending-down col-red"></i></h4>
		                                <p className="text-muted">This Week's Sales</p>
		                            </div>
		                            <div className="col-sm-3 col-6">
		                                <h4 className="margin-0">$ 4210 <i className="zmdi zmdi-trending-up col-green"></i></h4>
		                                <p className="text-muted">This Month's Sales</p>
		                            </div>
		                            <div className="col-sm-3 col-6">
		                                <h4 className="margin-0">$ 67,000 <i className="zmdi zmdi-trending-up col-green"></i></h4>
		                                <p className="text-muted">This Year's Sales</p>
		                            </div>
		                        </div>
		                        <div id="area_chart" className="graph"></div>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <div className="row clearfix">
		            <div className="col-lg-8 col-md-12">
		                <div className="row clearfix">
		                    <div className="col-lg-12">
		                        <div className="card">
		                            <ul className="row profile_state list-unstyled">
		                                <li className="col-lg-3 col-md-3 col-6">
		                                    <div className="body">
		                                        <i className="zmdi zmdi-eye col-amber"></i>
		                                        <h4>15,453</h4>
		                                        <span>Post View</span>
		                                    </div>
		                                </li>
		                                <li className="col-lg-3 col-md-3 col-6">
		                                    <div className="body">
		                                        <i className="zmdi zmdi-thumb-up col-blue"></i>
		                                        <h4>921</h4>
		                                        <span>Likes</span>
		                                    </div>
		                                </li>
		                                <li className="col-lg-3 col-md-3 col-6">
		                                    <div className="body">
		                                        <i className="zmdi zmdi-comment-text col-red"></i>
		                                        <h4>215</h4>
		                                        <span>Comments</span>
		                                    </div>
		                                </li>
		                                <li className="col-lg-3 col-md-3 col-6">
		                                    <div className="body">
		                                        <i className="zmdi zmdi-account text-success"></i>
		                                        <h4>22,055</h4>
		                                        <span>Profile Views</span>
		                                    </div>
		                                </li>
		                            </ul>
		                        </div>
		                    </div>
		                    <div className="col-lg-7 col-md-6">
		                        <div className="card tasks_report">
		                            <div className="header">
		                                <h2><strong>Total</strong> Revenue</h2>
		                                <ul className="header-dropdown">
		                                    <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
		                                        <ul className="dropdown-menu slideUp">
		                                            <li><a href="javascript:void(0);">2017 Year</a></li>
		                                            <li><a href="javascript:void(0);">2016 Year</a></li>
		                                            <li><a href="javascript:void(0);">2015 Year</a></li>
		                                        </ul>
		                                    </li>
		                                    <li className="remove">
		                                        <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
		                                    </li>
		                                </ul>
		                            </div>
		                            <div className="body text-center">
		                                <h4 className="margin-0">Total Sale</h4>
		                                <h6 className="m-b-20">2,45,124</h6>
		                                <input type="text" className="knob dial1" value="66" datawidth="100" dataheight="100" datathickness="0.1" datafgcolor="#212121" readOnly />
		                                <h6 className="m-t-20">Satisfaction Rate</h6>
		                                <small className="displayblock">47% Average <i className="zmdi zmdi-trending-up"></i></small>
		                                <div className="sparkline m-t-20" datatype="bar" datawidth="97%" dataheight="35px" databarwidth="2" databarspacing="8" databarcolor="#212121">3,2,6,5,9,8,7,8,4,5,1,2,9,5,1,3,5,7,4,6</div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-lg-5 col-md-6">
		                        <div className="card top-report">
		                            <div className="body">
		                                <h3 className="m-t-0">1,600 <i className="zmdi zmdi-trending-up float-right"></i></h3>
		                                <p className="text-muted">New Feedbacks</p>
		                                <div className="progress">
		                                    <div className="progress-bar l-blush" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style={{width: '68%'}}></div>
		                                </div>
		                                <small>Change 15%</small>
		                            </div>
		                        </div>
		                        <div className="card top-report">
		                            <div className="body">
		                                <h3 className="m-t-0 m-b-25">50.5 Gb <i className="zmdi zmdi-trending-up float-right"></i></h3>
		                                <p className="text-muted">Traffic this month</p>
		                                <div className="progress">
		                                    <div className="progress-bar l-turquoise" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style={{width: '68%'}}></div>
		                                </div>
		                                <small>Change 5%</small>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div className="col-lg-4 col-md-12">
		                <div className="card weather2">
		                    <div className="city-selected body l-khaki">
		                        <div className="row">
		                            <div className="col-12">
		                                <div className="city"><span>City:</span> New York</div>
		                                <div className="night">Day - 12:07 PM</div>
		                            </div>
		                            <div className="info col-7">
		                                <div className="temp"><h2>34°</h2></div>
		                            </div>
		                            <div className="icon col-5">
		                                <img src="https://thememakker.com/templates/oreo/html/assets/images/weather/summer.svg" alt=""/>
		                            </div>
		                        </div>
		                    </div>
		                    <table className="table table-striped m-b-0">
		                        <tbody>
		                            <tr>
		                            <td>Wind</td>
		                            <td className="font-medium">ESE 17 mph</td>
		                        </tr>
		                        <tr>
		                            <td>Humidity</td>
		                            <td className="font-medium">72%</td>
		                        </tr>
		                        <tr>
		                            <td>Pressure</td>
		                            <td className="font-medium">25.56 in</td>
		                        </tr>
		                        <tr>
		                            <td>Cloud Cover</td>
		                            <td className="font-medium">80%</td>
		                        </tr>
		                        <tr>
		                            <td>Ceiling</td>
		                            <td className="font-medium">25280 ft</td>
		                        </tr>
		                        </tbody>
		                    </table>
		                    <div className="carousel slide" data-ride="carousel">
		                        <div className="carousel-inner" role="listbox">
		                            <div className="carousel-item text-center active">
		                                <div className="col-12">
		                                    <ul className="row days-list list-unstyled">
		                                        <li className="day col-4">
		                                            <p>Monday</p>
		                                            <img src="https://thememakker.com/templates/oreo/html/assets/images/weather/rain.svg" alt=""/>
		                                        </li>
		                                        <li className="day col-4">
		                                            <p>Tuesday</p>
		                                            <img src="https://thememakker.com/templates/oreo/html/assets/images/weather/cloudy.svg" alt=""/>
		                                        </li>
		                                        <li className="day col-4">
		                                            <p>Wednesday</p>
		                                            <img src="https://thememakker.com/templates/oreo/html/assets/images/weather/wind.svg" alt=""/>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </div>
		                            <div className="carousel-item text-center">
		                                <div className="col-12">
		                                    <ul className="row days-list list-unstyled">
		                                        <li className="day col-4">
		                                            <p>Thursday</p>
		                                            <img src="https://thememakker.com/templates/oreo/html/assets/images/weather/sky.svg" alt=""/>
		                                        </li>
		                                        <li className="day col-4">
		                                            <p>Friday</p>
		                                            <img src="https://thememakker.com/templates/oreo/html/assets/images/weather/cloudy.svg" alt=""/>
		                                        </li>
		                                        <li className="day col-4">
		                                            <p>Saturday</p>
		                                            <img src="https://thememakker.com/templates/oreo/html/assets/images/weather/summer.svg" alt=""/>
		                                        </li>
		                                    </ul>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <div className="row clearfix">
		            <div className="col-lg-8 col-md-12">
		                <div className="card visitors-map">
		                    <div className="header">
		                        <h2><strong>Visitors</strong> Statistics</h2>
		                        <ul className="header-dropdown">
		                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
		                                <ul className="dropdown-menu slideUp">
		                                    <li><a href="javascript:void(0);">Action</a></li>
		                                    <li><a href="javascript:void(0);">Another action</a></li>
		                                    <li><a href="javascript:void(0);">Something else</a></li>
		                                </ul>
		                            </li>
		                            <li className="remove">
		                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
		                            </li>
		                        </ul>
		                    </div>
		                    <div className="body">
		                        <div id="world-map-markers" style={{height: '245'}} className="m-b-10"></div>
		                        <div className="row">
		                            <div className="col-lg-6 col-md-12">
		                                <div className="progress-container">
		                                    <span className="progress-badge">visitor from america</span>
		                                    <div className="progress">
		                                        <div className="progress-bar l-turquoise" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: '86%'}}>
		                                            <span className="progress-value">86%</span>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="progress-container m-t-20">
		                                    <span className="progress-badge">visitor from Canada</span>
		                                    <div className="progress">
		                                        <div className="progress-bar l-coral" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: '86%'}}>
		                                            <span className="progress-value">86%</span>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="progress-container m-t-20">
		                                    <span className="progress-badge">visitor from Germany</span>
		                                    <div className="progress">
		                                        <div className="progress-bar l-blue" role="progressbar" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100" style={{width: '38%'}}>
		                                            <span className="progress-value">86%</span>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="col-lg-6 col-md-12">
		                                <div className="progress-container">
		                                    <span className="progress-badge">visitor from UK</span>
		                                    <div className="progress">
		                                        <div className="progress-bar l-salmon" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style={{width: '48%'}}>
		                                            <span className="progress-value">86%</span>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="progress-container m-t-20">
		                                    <span className="progress-badge">visitor from India</span>
		                                    <div className="progress">
		                                        <div className="progress-bar l-parpl" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: '86%'}}>
		                                            <span className="progress-value">86%</span>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="progress-container m-t-20">
		                                    <span className="progress-badge">visitor from Australia</span>
		                                    <div className="progress">
		                                        <div className="progress-bar l-amber" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{width: '55%'}}>
		                                            <span className="progress-value">86%</span>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="row clearfix social-widget">
		                    <div className="col-lg-4 col-md-4">
		                        <div className="card info-box-2 hover-zoom-effect instagram-widget">
		                            <div className="icon"><i className="zmdi zmdi-instagram"></i></div>
		                            <div className="content">
		                                <div className="text">Followers</div>
		                                <div className="number">231</div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-lg-4 col-md-4">
		                        <div className="card info-box-2 hover-zoom-effect linkedin-widget">
		                            <div className="icon"><i className="zmdi zmdi-linkedin"></i></div>
		                            <div className="content">
		                                <div className="text">Followers</div>
		                                <div className="number">2510</div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-lg-4 col-md-4">
		                        <div className="card info-box-2 hover-zoom-effect behance-widget">
		                            <div className="icon"><i className="zmdi zmdi-behance"></i></div>
		                            <div className="content">
		                                <div className="text">Project</div>
		                                <div className="number">121</div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div className="col-lg-4 col-md-12">
		                <div className="card">
		                    <div className="header">
		                        <h2><strong>Browser</strong> Usage</h2>
		                        <ul className="header-dropdown">
		                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
		                                <ul className="dropdown-menu">
		                                    <li><a href="javascript:void(0);">Action</a></li>
		                                    <li><a href="javascript:void(0);">Another action</a></li>
		                                    <li><a href="javascript:void(0);">Something else</a></li>
		                                </ul>
		                            </li>
		                            <li className="remove">
		                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
		                            </li>
		                        </ul>
		                    </div>
		                    <div className="body">
		                        <div id="donut_chart" className="dashboard-donut-chart"></div>
		                        <table className="table m-t-25 m-b-0">
		                            <tbody>
		                                <tr>
		                                    <td>Chrome</td>
		                                    <td>6985</td>
		                                    <td><i className="zmdi zmdi-caret-up text-success"></i></td>
		                                </tr>
		                                <tr>
		                                    <td>Other</td>
		                                    <td>2697</td>
		                                    <td><i className="zmdi zmdi-caret-up text-success"></i></td>
		                                </tr>
		                                <tr>
		                                    <td>Safari</td>
		                                    <td>3597</td>
		                                    <td><i className="zmdi zmdi-caret-down text-danger"></i></td>
		                                </tr>
		                                <tr>
		                                    <td>Firefox</td>
		                                    <td>2145</td>
		                                    <td><i className="zmdi zmdi-caret-up text-success"></i></td>
		                                </tr>
		                                <tr>
		                                    <td>Opera</td>
		                                    <td>1854</td>
		                                    <td><i className="zmdi zmdi-caret-down text-danger"></i></td>
		                                </tr>
		                                <tr>
		                                    <td>IE</td>
		                                    <td>154</td>
		                                    <td><i className="zmdi zmdi-caret-down text-danger"></i></td>
		                                </tr>
		                            </tbody>
		                        </table>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <div className="row clearfix">
		            <div className="col-sm-12 col-md-12 col-lg-12">
		                <div className="card">
		                    <div className="header">
		                        <h2><strong>Members</strong> Profiles <small>Members Preformance / Monthly Status</small> </h2>
		                        <ul className="header-dropdown">
		                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
		                                <ul className="dropdown-menu slideUp">
		                                    <li><a href="javascript:void(0);">Action</a></li>
		                                    <li><a href="javascript:void(0);">Another action</a></li>
		                                    <li><a href="javascript:void(0);">Something else</a></li>
		                                </ul>
		                            </li>
		                            <li className="remove">
		                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
		                            </li>
		                        </ul>
		                    </div>
		                    <div className="body table-responsive members_profiles">
		                        <table className="table table-hover">
		                            <thead>
		                                <tr>
		                                    <th style={{width:'60px'}}>Member</th>
		                                    <th>Name</th>
		                                    <th>Earnings</th>
		                                    <th>Sales</th>
		                                    <th>Reviews</th>
		                                    <th>Progress</th>
		                                </tr>
		                            </thead>
		                            <tbody>
		                                <tr>
		                                    <td>
		                                        <img className="rounded-circle" src={avatar1} alt="user" width="40"/> </td>
		                                    <td>
		                                        <a href="javascript:void(0);">Logan</a>
		                                    </td>
		                                    <td>$420</td>
		                                    <td>23</td>
		                                    <td>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star-outline"></i>
		                                    </td>
		                                        <td>
		                                        <div className="progress">
		                                            <div className="progress-bar l-green" role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100" style={{width: '87%'}}></div>
		                                        </div>
		                                    </td>
		                                </tr>
		                                <tr>
		                                    <td>
		                                        <img className="rounded-circle" src={avatar2} alt="user" width="40"/> </td>
		                                    <td>
		                                        <a href="javascript:void(0);">Isabella</a>
		                                    </td>
		                                    <td>$350</td>
		                                    <td>16</td>
		                                    <td>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star-outline"></i>
		                                        <i className="zmdi zmdi-star-outline"></i>
		                                    </td>
		                                        <td>
		                                        <div className="progress">
		                                            <div className="progress-bar l-amber" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style={{width: '68%'}}></div>
		                                        </div>
		                                    </td>
		                                </tr>
		                                <tr>
		                                    <td>
		                                        <img className="rounded-circle" src={avatar3} alt="user" width="40"/> </td>
		                                    <td>
		                                        <a href="javascript:void(0);">Jackson</a>
		                                    </td>
		                                    <td>$201</td>
		                                    <td>11</td>
		                                    <td>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star-outline"></i>
		                                        <i className="zmdi zmdi-star-outline"></i>
		                                        <i className="zmdi zmdi-star-outline"></i>
		                                    </td>
		                                        <td>
		                                        <div className="progress">
		                                            <div className="progress-bar l-parpl" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style={{width:'32%'}}></div>
		                                        </div>
		                                    </td>
		                                </tr>
		                                <tr>
		                                    <td>
		                                        <img className="rounded-circle" src={avatar4} alt="user" width="40"/> </td>
		                                    <td>
		                                        <a href="javascript:void(0);">Victoria</a>
		                                    </td>
		                                    <td>$651</td>
		                                    <td>28</td>
		                                    <td>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star-half"></i>
		                                    </td>
		                                        <td>
		                                        <div className="progress">
		                                            <div className="progress-bar l-green" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
		                                        </div>
		                                    </td>
		                                </tr>
		                                <tr>
		                                    <td>
		                                        <img className="rounded-circle" src={avatar5} alt="user" width="40"/> </td>
		                                    <td>
		                                        <a href="javascript:void(0);">Lucas</a>
		                                    </td>
		                                    <td>$300</td>
		                                    <td>20</td>
		                                    <td>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star"></i>
		                                        <i className="zmdi zmdi-star-half"></i>
		                                        <i className="zmdi zmdi-star-outline"></i>
		                                    </td>
		                                        <td>
		                                        <div className="progress">
		                                            <div className="progress-bar l-blue" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}></div>
		                                        </div>
		                                    </td>
		                                </tr>

		                            </tbody>
		                        </table>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
			</section>
		);
	}
}

export default Main;
