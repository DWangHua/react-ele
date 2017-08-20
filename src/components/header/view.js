import React, { Component } from 'react';
import './header.css';


const Avatar = ({avatar}) => 
<div className="avatar">
    <img alt="avatar" width="64" height="64" src={avatar}/>
  </div>;

const clsMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
const Supports = ({support = {}}) => {
  return (
    <div className="support">
        <span className={clsMap[support.type] + ' icon'}></span>
        <span className="text">{support.description}</span>
    </div>
  );
}


const Desc = ({description='', deliveryTime=''}) => 
  <div className="description">
    {description}/{deliveryTime}分钟送达
  </div>;

const Title = ({name=''}) => 
  <div className="title">
    {/* 品牌 */}
    <span className="brand"></span>
    <span className="name">{name}</span>
  </div>

const ContentWrap = ({seller}) => {
  return (
    <div className="content-wrapper">
      <Avatar avatar={seller.avatar}/>
      <div className="content">
        <Title name={seller.name}/>
        <Desc description={seller.description} deliveryTime={seller.deliveryTime}/>
        {seller.supports ? <Supports support={seller.supports[0]}/> : null}
        {seller.supports ? <SupportCount count={seller.supports.length}/> : null}
      </div>
    </div>
  );
}

const SupportCount = ({count}) => 
  <div className="support-count">
    <span className="count">{count}个</span>
    <i className="icon-keyboard_arrow_right"></i>
  </div>;

export default class MHeader extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const { seller } = this.props;
    return (
      <div className="header">
        <ContentWrap seller={seller}/>
        <div className="bullentin-wrapper"></div>
      </div>
    );
  }
}