import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 >Nuevos Lanzamientos <i class="fab fa-playstation"></i><i class="fab fa-xbox"></i><i class="fas fa-headset"></i></h1> 
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/fifa.png'
              text='Forma el equipo de tus sueños.'
              label='Deportes'
              path='/services'
            />
            <CardItem
              src='images/callofduty.jpg'
              text='Alzate en cada frente.'
              label='Disparos'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/warhammer.jpg'
              text='Conquista tus demonios.'
              label='Mystery'
              path='/'
            />
            <CardItem
              src='images/guardians.jpg'
              text='Ponte en marcha en una aventura fuera de este mundo.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/spider.jpg'
              text='Se mejor, se quien eres.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
