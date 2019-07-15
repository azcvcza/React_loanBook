import React from 'react';
import PropTypes from 'prop-types';
import{LIST_VIEW,CHART_VIEW} from '../utility';
const generateLinkClass =(current,view)=>{
	return (current ===view)?'nav-link active':'nav-link';
}
const ViewTab = ({activeTab, onTabChange})=>{
	return(
	<ul className="nav nav-tabs nav-fill my-4"
	>
		<li className='nav-item'>
		
			<a href="#" 
				className={generateLinkClass(activeTab,LIST_VIEW)}
				onClick={(event)=>{event.preventDefault();onTabChange(LIST_VIEW)}}
			>
				<span className="col-1 badge badge-primary">-></span>
				列表模式
				</a>
		</li>
		<li className='nav-item'>
		
			<a href="#" className={generateLinkClass(activeTab,CHART_VIEW)}
				onClick={(event)=>{event.preventDefault();onTabChange(CHART_VIEW)}}
			>
				<span className="col-1 badge badge-primary">-></span>
				图表模式
				</a>
		</li>
	</ul>
	)
}
VuewTab.propType={
	activeTab:PropTypes.string.isRequired,
	onTabChange:PropTypes.func.isRequired
}
export default ViewTab;
