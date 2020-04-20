import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import Form from './components/form';
//暂定传入的数据结构
const items = [
  {
    "id": 1,
    "title": "go to 云南",
    "price": 200,
    "date": "2018-09-10",
    "category": {
      "id": "1",
      "name": "旅行",
      "type": "outcome",
      'iconName': 'ios-plane'
    }
  },
  {
    "id": 2,
    "title": "go to 深圳",
    "price": 300,
    "date": "2018-01-10",
    "category": {
      "id": "2",
      "name": "旅行",
      "type": "income",
      'iconName': 'ios-plane'
    }
  },
  {
    "id": 3,
    "title": "go to fuck",
    "price": 400,
    "date": "2018-04-01",
    "category": {
      "id": "3",
      "name": "旅行",
      "type": "outcome",
      'iconName': 'ios-plane'
    }
  },
]
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Home} exact></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/create" component={Form}></Route>
        <Route path="/edit/:id" component={Form}></Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
