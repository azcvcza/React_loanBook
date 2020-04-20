import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'redux';
const createButton = ({onCreateButtonClick})=>{
	return(
	<button className="btn btn-lg btn-primary" onClick={onCreateButtonClick}> create new record</button>
	)
}
createButton.propType={
	onCreateButtonClick:PropTypes.string.isRequired,

}
export default createButton;
