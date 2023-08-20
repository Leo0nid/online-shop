import React, { Component, useState } from 'react'


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
    return (
      <div>SFDdfdf
        <div>
          <For each="prod" in={this.state.Products}>
            <div>
              {prod.key}
            </div>
            <div>
              {prod.title}
            </div>
            <div>
              {prod.img}
            </div>
          </For>
        </div>
      </div>
    );
  }
}

export default Categories
