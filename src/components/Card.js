import React from "react";

function Card (props) {
  
  function handleClick() {
    props.onCardClick(props);
  } 

  return (
      <li key = {props._id} className="element">
        <img className="element__image" 
        src={props.src} 
        alt={props.alt}
        onClick={handleClick}
        />
        <button className="element__delete" type="button" aria-label="удалить"></button>
        <div className="element__text">
          <h2 className="element__title">{props.alt}</h2>
          <div className="element__like-container">
            <button className="element__like" type="button" aria-label="нравится"></button>
            <p className="element__like-counter">{props.likes}</p>
          </div>
        </div>
      </li>
  )
}

export default Card;