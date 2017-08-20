import React, { Component } from 'react';
import {HashRouter, Route, Switch, NavLink} from 'react-router-dom';

import MHeader from './components/header/view';

import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seller: null
    };
  }

  componentDidMount() {
    this._getSeller().then(res => {
      if (res.data.errno !== 0) {
        console.log('请求出错');
      } else {
        let seller = res.data.data;
        this.setState({
          seller
        });
      }
    }).catch(error => console.log(error));
  }

  _getSeller = () => {
    return axios({
      url: '/api/seller',
      method: 'get',
      params: {}
    });
  }

  render() {
    // console.log(this.state.seller);
    return (
      <HashRouter>
        <div className="app">
          {this.state.seller ? <MHeader seller={this.state.seller}></MHeader> : null}
          <div className="tab border-1px">
            <NavLink to={"/goods"} className="tab-item">商品</NavLink>
            <NavLink to={"/ratings"} className="tab-item">评论</NavLink>
            <NavLink to={"/seller"} className="tab-item">卖家</NavLink>
          </div>
          <Switch>
            <Route path="/" exact component={() => <div>A</div>}></Route>
            <Route path="/goods" component={() => <div>A</div>} exact></Route>
            <Route path="/ratings" component={() => <div>B</div>} exact></Route>
            <Route path="/seller" component={() => <div>C</div>} exact></Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
