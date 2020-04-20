import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'redux';
const form = ({onCreateButtonClick})=>{
	return(
        <p>hello world</p>
	)
}
form.propType={
	onCreateButtonClick:PropTypes.string.isRequired,

}
export default form;
