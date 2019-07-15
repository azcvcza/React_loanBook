import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceList from './components/PriceList'
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
      <PriceList 
        items={items}
        onModifyItem={(item)=>{console.log(item.id)}}
        onDeleteItem={(item)=>{console.log('delete:'+item.id)}}
      ></PriceList>
    </div>
  );
}

export default App;
