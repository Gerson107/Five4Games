import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>GRANDES JUGADORES</h1>
      <p>Consigue tus juegos favoritos</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          <i class="fas fa-user-alt"></i> Registrate
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;