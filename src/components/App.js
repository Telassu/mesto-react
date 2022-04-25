import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopupOpen from './EditAvatarPopupOpen';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
  }

  return (
    <div className="page">
      <Header />
      <Main 
      onEditProfilePopupOpen = {handleEditProfileClick}
      onAddPlace = {handleAddPlaceClick}
      onEditAvatar = {handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm 
      onClose = {closeAllPopups}
      />
      <PopupWithImage />
      <EditProfilePopup 
      isOpen = {isEditProfilePopupOpen}
      />
      <AddPlacePopup 
      isOpen = {isAddPlacePopupOpen}
      />
      <EditAvatarPopupOpen 
      isOpen = {isEditAvatarPopupOpen}
      />

{/*    <div className="popup popup_profile">
      <div className="popup__window">
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className="popup__form popup__form_profile" action="#" name="popup" noValidate>        
            <input type="text" name="name" id="name" className="popup__input popup__input_type_name" placeholder="Имя" minLength="2" maxLength="40" required />
            <span className="popup__input-error name-input-error"></span>
            <input type="text" name="description" id="description" className="popup__input popup__input_type_description" placeholder="Профессиональная деятельность" minLength="2" maxLength="200" required />
            <span className="popup__input-error description-input-error"></span>
            <button className="popup__save-button popup__save-button_profile" type="submit" aria-label="сохранить">Сохранить</button>      
        </form>
        <button className="popup__close-button popup__close-button_profile" type="button" aria-label="закрыть окно"></button>
      </div>
    </div>
    <div className="popup popup_element">
      <div className="popup__window">
        <h2 className="popup__title">Новое место</h2>
        <form className="popup__form popup__form_element" action="#" method="get" name="popup" noValidate>
          <button className="popup__save-button popup__save-button_element" type="submit" aria-label="создать">Создать</button>      
        </form>
        <button className="popup__close-button popup__close-button_element" type="button" aria-label="закрыть окно"></button>
      </div>
    </div>
    <div className="popup popup_avatar">
      <div className="popup__window">
        <h2 className="popup__title">Обновить аватар</h2>
        <form className="popup__form popup__form_avatar" action="#" name="popup" noValidate>
          <button className="popup__save-button popup__save-button_avatar" type="submit" aria-label="сохранить">Сохранить</button>      
        </form>
        <button className="popup__close-button popup__close-button_avatar" type="button" aria-label="закрыть окно"></button>
      </div>
    </div>
    <div className="popup popup_delete">
      <div className="popup__window">
        <h2 className="popup__title">Вы уверены?</h2>
        <form className="popup__form popup__form_delete" action="#" method="get" name="popup" noValidate>
          <button className="popup__save-button popup__save-button_delete" type="submit" aria-label="подтверждение">Да</button>      
        </form>
        <button className="popup__close-button popup__close-button_delete" type="button" aria-label="закрыть окно"></button>
      </div>
    </div>*/}

    <template className="element__template">
      <li className="element">
        <img className="element__image" src="#" alt="#"/>
        <button className="element__delete" type="button" aria-label="удалить"></button>
        <div className="element__text">
          <h2 className="element__title">test</h2>
          <div className="element__like-container">
            <button className="element__like" type="button" aria-label="нравится"></button>
            <p className="element__like-counter">#</p>
          </div>
        </div>
      </li>
    </template>
    </div>
  );
}

export default App;
