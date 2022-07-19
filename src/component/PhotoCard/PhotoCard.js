import React from 'react';
import './PhotoCard.css';

function PhotoCard({ card }) {

  return (
    <section className='photo-card'>
      <div className='photo-card__container'>
        <img className='photo-card__photo' src={card.img} alt={`photo ${card.name}`} />
        <h3 className='photo-card__name'> {card.name} </h3>
        <p className='photo-card__discription'> {card.discription} </p>
      </div>
    </section>
   );
}

export default PhotoCard;