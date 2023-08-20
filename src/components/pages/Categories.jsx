import React, { Component } from 'react'
import img1 from './../img/1.png'
import img2 from './../img/2.png'
import img3 from './../img/3.png'
import img4 from './../img/4.png'
import img5 from './../img/5.png'


export class Categories extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Products: [
        {
          key: "T_shirts",
          title: "Футболки",
          img: "1.png",
        },
        {
          key: "sweater",
          title: "Кофты",
          img: "2.png",
        },
        {
          key: "Shirts",
          title: "Рубашки",
          img: "3.png",
        },
        {
          key: "Sweatshirts",
          title: "Свитшоты",
          img: "4.png",
        },
        {
          key: "Pants",
          title: "Брюки",
          img: "5.png",
        },
        {
          key: "Bombers",
          title: "Бомберы",
          img: "6.png",
        },

      ]
    }
  }

  render() {
    let prods = [];
    let prodList = this.state.Products;
    for (let i = 0; i < prodList.length; i++) {
      console.log('scr/components/img/' + prodList[i].img);
      prods.push(
      <>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
        <p className='itemTitle'>{prodList[i].title}</p>
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
