import React from 'react';

class Titles extends React.Component{

	render(){
		const DATE_OPTIONS = { weekday: 'long',year: 'numeric',  month: 'long', day: 'numeric' };
	    const today = new Date();

		return(
			<div>
				<p className="header">Weather</p>
				<span>{today.toLocaleDateString('en-US', DATE_OPTIONS)}</span>
			</div>
		)
	}
}


export default Titles;