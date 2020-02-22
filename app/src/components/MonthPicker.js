import React from 'react';
import PropTypes from 'prop-types';
import {padLeft, range} from '../utility';
class MonthPicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			selectedYear: this.props.year,
		}
	}
	toggleDropdown = (e) => {
		e.preventDefault();
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	selectYear = (event, yearNumber) => {
		event.preventDefault();
		this.setState({
			selectedYear: yearNumber
		})

	}
	selectMonth = (event, monthNumber) => {
		event.preventDefault();
		this.setState({
			isOpen: false
		});
		this.props.onChange(this.state.selectedYear, monthNumber);
	}
	checkClickTarget = (e) => {
		//console.log(e.target.nodeName);
		if (e.target.nodeName === 'BUTTON') {
			this.setState({
				isOpen: true,
			})
		} else if (e.target.nodeName !== 'BUTTON' && e.target.nodeName != 'A') {
			this.setState({
				isOpen: false,
			})
		} else if (e.target.nodeName !== 'BUTTON' && e.target.nodeName === 'A' && e.target.className.indexOf('month') > 0) {
			this.setState({
				isOpen: false,
			})
		}

	}
	render() {
		const {year, month} = this.props;
		const {isOpen} = this.state;
		const {selectedYear} = this.state;
		const monthRange = range(12, 1);
		const yearRange = range(9, -4).map((number) => {return number + year});
		return (
			<div className="dropdown month-picker-component" onClick={this.checkClickTarget}>
				<span><p>选择月份</p>
					<button className="btn btn-sm btn-secondary dropdown-toggle"
						style={{display: 'block'}}
						onClick={this.toggleDropdown}
					>
						{`${year}年 ${padLeft(month)} 月`}
					</button>
				</span>
				{
					isOpen &&
					<div className='dropdown-menu' style={{display: 'block'}}>
						<div className="row">
							<div className="col border-right">
								{
									yearRange.map((yearNumber, index) =>
										<a href="#"
											key={index}
											onClick={(e) => {this.selectedYear = this.selectYear(e, yearNumber)}}
											className={(yearNumber === selectedYear) ? 'dropdown-item active year' : 'dropdown-item year'}>{yearNumber} 年</a>
									)
								}
							</div>
							<div className="col">
								{
									monthRange.map((monthNumber, index) =>
										<a href='#'
											key={index}
											onClick={(e) => {this.selectMonth(e, monthNumber)}}
											className={(monthNumber === month) ? 'dropdown-item active month' : 'dropdown-item month'}>{padLeft(monthNumber)}月</a>
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
MonthPicker.propTypes = {
	year: PropTypes.number.isRequired,
	month: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
}
export default MonthPicker;
