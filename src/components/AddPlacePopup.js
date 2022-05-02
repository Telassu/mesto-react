import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup (props) {
  return (
  <PopupWithForm
    name ='element'
    title = 'Новое место'
    btnText = 'Создать'
    isOpen = {props.isOpen}
    onClose = {props.onClose}
    >

      <input 
      type="text" 
      id="place" 
      name="place" 
      className ="popup__input popup__input_type_place" 
      placeholder="Название" 
      minLength="2" 
      maxLength="30"
      required
      />
      
      <span 
      className ="popup__input-error place-input-error"
      ></span>

      <input 
      type="url" 
      id="link" 
      name="link" 
      className ="popup__input popup__input_type_link" 
      placeholder="Ссылка на картинку"
      required
      />

      <span 
      className ="popup__input-error link-input-error"
      ></span>


    </PopupWithForm>
  
  )

}

export default AddPlacePopup;