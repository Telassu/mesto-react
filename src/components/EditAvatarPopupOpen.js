import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopupOpen (props) {
  return (
    <PopupWithForm
    name ='avatar'
    title = 'Обновить аватар'
    btnText = 'Сохранить'
    isOpen = {props.isOpen}
    onClose = {props.onClose}
    >

      <input 
      type="url" 
      id="avatar" 
      name="avatar" 
      className ="popup__input popup__input_type_avatar" 
      placeholder="Ссылка на картинку" 
      required
      />
      
      <span 
      className ="popup__input-error avatar-input-error"
      ></span>
    </PopupWithForm>
  )

}

export default EditAvatarPopupOpen;