import React from 'react';
import avatar1 from '../assets/images/xs/avatar1.jpg';
import avatar2 from '../assets/images/xs/avatar2.jpg';
import avatar3 from '../assets/images/xs/avatar3.jpg';
import avatar4 from '../assets/images/xs/avatar4.jpg';
import avatar6 from '../assets/images/xs/avatar6.jpg';

class Chat extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      chatShow: false
    };
  }
  handleToggle(name) {
		this.setState({[name]: !this.state[name]});
	}
  render() {
  	let {chatShow} = this.state;
  	return (
		  <div>
			    <div className={`chat-launcher ${chatShow && 'active'}`} onClick={this.handleToggle.bind(this, 'chatShow')}></div>
					<div className={`chat-wrapper ${chatShow && 'is-open pullUp'}`}>
					    <div className="card">
					        <div className="header">
					            <ul className="list-unstyled team-info margin-0">
					                <li className="m-r-15"><h2>Design Team</h2></li>
					                <li>
					                    <img src={avatar2} alt="Avatar"/>
					                </li>
					                <li>
					                    <img src={avatar3} alt="Avatar"/>
					                </li>
					                <li>
					                    <img src={avatar4} alt="Avatar"/>
					                </li>
					                <li>
					                    <img src={avatar6} alt="Avatar"/>
					                </li>
					                <li>
					                    <a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle"></i></a>
					                </li>
					            </ul>
					        </div>
					        <div className="body">
					        		<div className="slimScrollDiv" style={{position: 'relative', overflowY: 'scroll', width: 'auto', height: '300px'}}>
						            <div className="chat-widget">
							            <ul className="chat-scroll-list clearfix">
							                <li className="left float-left">
							                    <img src={avatar3} className="rounded-circle" alt=""/>
							                    <div className="chat-info">
							                        <a className="name" href="javascript:void(0);">Alexander</a>
							                        <span className="datetime">6:12</span>
							                        <span className="message">Hello, John </span>
							                    </div>
							                </li>
							                <li className="right">
							                    <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br/> How are you!</span> </div>
							                </li>
							                <li className="right">
							                    <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
							                </li>
							                <li className="left float-left"> <img src={avatar2} className="rounded-circle" alt=""/>
							                    <div className="chat-info"> <a className="name" href="javascript:void(0);">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br/> John <br/> What are you doing?</span> </div>
							                </li>
							                <li className="left float-left"> <img src={avatar1} className="rounded-circle" alt=""/>
							                    <div className="chat-info"> <a className="name" href="javascript:void(0);">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
							                </li>
							                <li className="right">
							                    <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br/>Michael</span> </div>
							                </li>
							            </ul>
						            </div>
						          </div>
					            <div className="input-group p-t-15">
					                <input type="text" className="form-control" placeholder="Enter text here..."/>
					                <span className="input-group-addon">
					                    <i className="zmdi zmdi-mail-send"></i>
					                </span>
					            </div>
					        </div>
					    </div>
					</div>
			</div>
  	);
	}
}

export default Chat;
