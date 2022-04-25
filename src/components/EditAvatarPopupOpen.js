import React from "react";

function EditAvatarPopupOpen () {
  return (
    <EditAvatarPopupOpen>
      <input type="url" id="avatar" name="avatar" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку" required />
      <span className="popup__input-error avatar-input-error"></span>
     </EditAvatarPopupOpen>     
  )

}

export default EditAvatarPopupOpen;