import React from 'react';

const Header = (props) => {
		return (
			<div className="Header">
			<header className="top">
			<h1>Lonely Hearts</h1>
			<h3 className="tagline">{props.tagline}</h3>
			</header>
			</div>
			);
	}

export default Header;