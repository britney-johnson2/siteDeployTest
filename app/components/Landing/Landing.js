import React from 'react';
import { Link } from 'react-router-dom';

const Landing = function() {
	return (
		<div id={'landing-page'}>
		<h1> Britney Text</h1>
			<Link to={'/waves'}>
				<div className={'card'}>
					<span className={'title'}>Tidal Waves</span>
					<img src={'images/waves.png'} alt={'waves'} />
				</div>
			</Link>

			<Link to={'/forests'}>
				<div className={'card'}>
					<span className={'title'}>Forests</span>
					<img src={'images/forest.jpg'} alt={'forests'} />
				</div>
			</Link>
		</div>
	);
};

export default Landing;
