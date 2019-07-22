import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceList from './components/PriceList';
import ViewTab from './components/ViewTab';
import MonthPicker from './components/MonthPicker';
import{LIST_VIEW,CHART_VIEW} from './utility';
//暂定传入的数据结构
const items = [
{
  "id":1,
  "title":"go to 云南",
  "price":200,
  "date":"2018-09-10",
  "category":{
    "id":"1",
    "name":"旅行",
    "type":"outcome",
    'iconName':'ios-plane'
  }
},
{
  "id":2,
  "title":"go to 深圳",
  "price":300,
  "date":"2018-01-10",
  "category":{
    "id":"2",
    "name":"旅行",
    "type":"income",
    'iconName':'ios-plane'
  }
},
{
  "id":3,
  "title":"go to fuck",
  "price":400,
  "date":"2018-04-01",
  "category":{
    "id":"3",
    "name":"旅行",
    "type":"outcome",
    'iconName':'ios-plane'
  }
},
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React World
        </p>
        
      </header>
      <MonthPicker
        year={2019}
        month={7}
        onChange = {(year,month)=>{console.log(year,month)}}
       ></MonthPicker>
      <ViewTab
        activeTab={LIST_VIEW}
        onTabChange={(view)=>{console.log(view)}}
      ></ViewTab>
      
      <PriceList 
        items={items}
        onModifyItem={(item)=>{console.log(item.id)}}
        onDeleteItem={(item)=>{console.log('delete:'+item.id)}}
      ></PriceList>
    </div>
  );
}

export default App;
