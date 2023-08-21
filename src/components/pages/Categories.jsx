import React, { Component } from 'react'
import axios from 'axios';


export class Categories extends Component {  

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    axios.get('https://64e08b5750713530432c6be6.mockapi.io/products')
      .then(response => {
        this.setState({products: response.data})
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    let prods = [];
    let prodList = this.state.products;
    for (let i = 0; i < prodList.length; i++) {
      console.log('scr/components/img/' + prodList[i].img);
      prods.push(
      <>
        <p className='itemTitle'>{prodList[i].name}</p>
        <p>{prodList[i].price}</p>
      </>
      );
    }
    
    return (
      <div>
        {prods}
      </div>
    );
  }
}

export default Categories
