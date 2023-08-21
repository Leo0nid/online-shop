import React, { Component } from 'react';
import '../scss/components/categories.scss';


class Categories extends Component {
  render() {
    return (
      <div className='categories'>
        <button className='categories__btn'>Категория одежды</button>
        <nav className='categories__nav'>
          <ul className='categories__list'>
            <button><li className='categories__item'>Все</li></button>
            <li className='categories__item' >Мужская одежда</li>
            <li className='categories__item'>Женская одежда</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Categories
