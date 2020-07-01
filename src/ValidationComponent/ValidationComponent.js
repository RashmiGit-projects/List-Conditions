import React,{Component} from 'react';

const ValidationComponent = (props) => {
	return (
		<div>
			{
				props.textlength>5?<p>Text long enough</p>:<p>Text too short</p>
			}
		</div>		
	);
}

export default ValidationComponent;