import React from 'react';
import logo from '../assets/images/logo.svg';

class PageLoader extends React.Component {
  render() {
  	return (
		  <div className="page-loader-wrapper">
			    <div className="loader">
			        <div className="m-t-30">
			        	<img className="zmdi-hc-spin" src={logo} width="48" height="48" alt="Oreo"/>
			        </div>
			        <p>Please wait...</p>        
			    </div>
			</div>
  	);
	}
}

export default PageLoader;
