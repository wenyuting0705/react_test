import React, { Component } from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import News from '../news/News';
import Message from '../message/Message'
class Home extends Component {
	render() {
		return (
			<div>
				<h2>Home组件内容</h2>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<NavLink to="/home/news"  activeClassName="myActive">News</NavLink>
							{/* <a href="/home/news">News</a> */}
						</li>
						<li>
						<NavLink to="/home/message"  activeClassName="myActive">Message</NavLink>
							{/* <a href="/home/message" activeClassName="myActive"></a> */}
						</li>
					</ul>
					<Switch>
						<Route path="/home/news" component={News}/>
						<Route path="/home/message" component={Message}/>
						<Redirect push to="/home/news"/>
					</Switch>
				
				</div>
			</div>
		)
	}
}
export default Home;
