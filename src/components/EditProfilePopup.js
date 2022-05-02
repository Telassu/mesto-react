import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup (props) {

  return (
    <PopupWithForm 
    name ='profile'
    title = 'Редактировать профиль'
    btnText = 'Сохранить'
    isOpen = {props.isOpen}
    onClose = {props.onClose}
    >

      <input 
      type = "text"
      name = "name"
      id = "name"
      className = "popup__input popup__input_type_name"
      placeholder = "Имя"
      minLength = "2"
      maxLength = "40"
      required
      />
      <span 
      className="popup__input-error name-input-error"
      ></span>

      <input 
      type="text" 
      name="description" 
      id="description" 
      className="popup__input popup__input_type_description" 
      placeholder="Профессиональная деятельность" 
      minLength="2" 
      maxLength="200" 
      required
      />
      <span 
      className="popup__input-error description-input-error"
      ></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;