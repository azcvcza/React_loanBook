import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'redux';
const Form = ({ onCreateButtonClick }) => {
	let [tabState, setTabState] = useState('outCome');
	let [billType, setBillType] = useState('first');
	let [cash, setCash] = useState(0);
	let [title, setTitle] = useState('');
	let [date, setDate] = useState('');
	let history = useHistory();
	const onTabChangeTo = (type) => {
		setTabState(type);
	}
	const onButtonClick = (type) => {
		setBillType(type)
	}
	const onInputChange = (type, e) => {
		console.log('type:', type);
		console.log('e:', e.target.value);
		if(type == 'Cash'){
			setCash(e.target.value);
		} else if(type == 'Title'){
			setTitle(e.target.value);
		} else if(type=='Date'){
			setDate(e.target.value);
		}
	}
	const onSubmit = (type)=>{
		if(cash && title && date){
			history.push({pathname:'/', state:{submitType:type,billType: billType, cash:cash,title:title,date:date}})
		}
	}
	const onCancel = () =>{
		setCash(0);
		setTitle('');
		setDate('');
	}
	return (
		<div
			className=""
		>
			<ul className="nav nav-tabs">
				<li role="presentation" className="active col-5" onClick={e => onTabChangeTo('outCome')}><a href="#">支出</a></li>
				<li role="presentation" className="col-5" onClick={e => onTabChangeTo('inCome')}><a href="#">收入</a></li>
			</ul>
			{tabState == 'outCome' && <div>
				<button onClick={e => onButtonClick('first')}>第一</button>
				<button onClick={e => onButtonClick('second')}>第二</button>
				<button onClick={e => onButtonClick('third')}>第三</button>
				<button onClick={e => onButtonClick('fourth')}>第四</button>
				<button onClick={e => onButtonClick('fifth')}>第五</button>
				<div><label>类型:</label>  {billType} </div>
				<div><label>标题:</label><input onChange={e => onInputChange('Title', e)} value={title}></input></div>
				<div><label>金额:</label><input onChange={e => onInputChange('Cash', e)} value={cash}></input></div>
				<div><label>日期:</label><input onChange={e => onInputChange('Date', e)} value={date}></input></div>
				<button onClick={e=>onSubmit('outcome')}>提交</button>
				<button onClick={e=>onCancel()}>取消</button>
			</div>}
			{tabState == 'inCome' && <div>inCome</div>}
		</div>
	)
}
Form.propType = {
	onCreateButtonClick: PropTypes.string.isRequired,

}
export default Form;
