import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img}  className='itemImg'/>
        <h2 className='itemTitle'>{this.props.item.title}</h2>
        <p  className='itemKey'>{this.props.item.key}</p>
      </div>  
    )
  }
}


export default Item
