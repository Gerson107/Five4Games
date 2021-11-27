import React from 'react';
import NosBlog from './NosBlog';
import './NosSection.css';

function NosSection() {
    return (
        <div className='nos-section'>
          <h1 className='title'>Mas Sobre Nosotros</h1>
            <div className='nos__container'>
              <div className='nos__wrapper'>
              <ul className='nos__list'>
            <NosBlog
              titlee='Nuestro Blog'
              src='images/c_bazzani.jpeg'
              title='Trucos para ser el mejor en Fifa.'
              detail='Escrito el: 20/10/2021 por: '
              text=' Maximixa el espacio en tu hogar con esta guia, 
              aprende a combinar mueblres 
              y colores para darle vida a tu espacio.'
              path='/nosotros'
            />
            <NosBlog
              src='imageS/juan.jpg'
              title='Aprende a cuidar tus equipos gamer.'
              detail='Escrito el: 02/11/2021 por: '
              text=' Maximixa el espacio en tu hogar con esta guia, 
              aprende a combinar mueblres 
              y colores para darle vida a tu espacio.'
              path='/services'
            />
          </ul>
        </div>
    </div>
</div>
    );
}

export default NosSection;
