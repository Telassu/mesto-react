import React from "react";

function ImagePopup (props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''} imageView`}>
      <figure className="imageView__figure">
        <img className="imageView__image" 
        src={props.card.src} 
        alt={props.card.alt}/>
        <figcaption className="imageView__caption">{props.card.alt}</figcaption>
        <button className="popup__close-button popup__close-button_imageView" 
        type="button" 
        aria-label="закрыть изображение"
        onClick={props.onClose}
        ></button>
      </figure>
    </div>
  ) 
}

export default ImagePopup;