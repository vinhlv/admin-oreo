import React from 'react'
import PageLoader from './PageLoader';
import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Header from './Header';
import Chat from './Chat';
import Main from './Main';

class Home extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      loading: true,
      rightMenu: false
    };
  }
	componentDidMount() {
		setTimeout(()=>{
			this.setState({loading: false})
		}, 500);
	}

  toggleRightMenu() {
    this.setState({rightMenu: !this.state.rightMenu});
  }

	render() {
    let {loading, rightMenu} = this.state;
    let style = rightMenu ? {display: 'block'} : {display: 'none'};
		return (
		  <div>
      	{
      		loading &&
      		<PageLoader/>
      	}
      	<div className="overlay" style={style} onClick={this.toggleRightMenu.bind(this)}></div>
        <Navbar toggleRightMenu={this.toggleRightMenu.bind(this)}/>
        <LeftSidebar/>
      	<RightSidebar isOpen={rightMenu}/>
        <Chat/>
        <Main/>
      </div>
		);
	}
}

export default Home;
