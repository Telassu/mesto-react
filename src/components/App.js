import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick (data) {
    setIsImagePopupOpen(true)
    setSelectedCard(data)
  } 

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopupOpen(false)
  }

  return (
    <div className="page">
      <Header />
      <Main 
      onEditProfilePopupOpen = {handleEditProfileClick}
      onAddPlace = {handleAddPlaceClick}
      onEditAvatar = {handleEditAvatarClick}
      onCardClick = {handleCardClick}
      />
      <Footer />
      <PopupWithForm 
      name ='profile'
      title = 'Редактировать профиль'
      btnText = 'Сохранить'
      onClose = {closeAllPopups}
      isOpen = {isEditProfilePopupOpen}
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

      <PopupWithForm 
      name ='element'
      title = 'Новое место'
      btnText = 'Создать'
      onClose = {closeAllPopups}
      isOpen = {isAddPlacePopupOpen}
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
        className="popup__input-error place-input-error"
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
        className="popup__input-error link-input-error"
        ></span>
      </PopupWithForm>

      <PopupWithForm
        name ='avatar'
        title = 'Обновить аватар'
        btnText = 'Сохранить'
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
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

      <ImagePopup 
      card = {selectedCard}
      isOpen = {isImagePopupOpen}
      onClose = {closeAllPopups}
      />
    </div>
  );
}

export default App;
