import React from 'react';
import PropTypes from 'prop-types';
import {padLeft,range} from '../utility';
class MonthPicker extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isOpen:false
		}
	}
	toggleDropdown = (e)=>{
		e.preventDefault();
		this.setState({
			isOpen:!this.state.isOpen
		})
	}
	render(){
		const {year,month} = this.props;
		const {isOpen} = this.state;
		const monthRange = range(12,1);
		const yearRange = range(9,-4).map((number)=> {return number+year});
		return (
			<div className="dropdown month-picker-component">
				<h4>选择月份</h4>
				<button className="btn btn-sm btn-secondary dropdown-toggle" 
						onClick={this.toggleDropdown}
				>
			       {`${year}年 ${padLeft(month)} 月`}
				</button>
				{
					isOpen &&
					<div className='dropdown-menu' style={{display:'inline-block'}}>
						<div className="row">
							<div className="col border-right">
								{
									yearRange.map((yearNumber,index)=>
									<a href="#" 
									key={index} 
									className={(yearNumber === year)?'dropdown-item active':'dropdown-item'}>{yearNumber} 年</a>
									)
								}
							</div>
							<div className="col">
								{
									monthRange.map((monthNumber,index)=>
									<a href='#' 
									key={index} 
									className={(monthNumber===month)?'dropdown-item active':'dropdown-item'}>{padLeft(monthNumber)}月</a>
									)
								}
							</div>
						</div>
					</div>
				}
			</div>
		)
	}
}
export default MonthPicker;
