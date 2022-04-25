import React from "react";

function PopupWithImage () {
  return (
    <div className="popup imageView">
      <figure className="imageView__figure">
        <img className="imageView__image" src="#" alt="#"/>
        <figcaption className="imageView__caption">подпись</figcaption>
        <button className="popup__close-button popup__close-button_imageView" type="button" aria-label="закрыть изображение"></button>
      </figure>
    </div>
  ) 
}

export default PopupWithImage;