import React,{Component} from 'react';

const CharComponent = (props) => {

	return (
		<div style={props.style} onClick={props.clicked}>
			{
				<label>{props.enteredchar}</label>
			}
		</div>		
	);
}

export default CharComponent;