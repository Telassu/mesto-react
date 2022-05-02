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
      onClose = {closeAllPopups}
      />
      <PopupWithImage 
      card = {selectedCard}
      isOpen = {isImagePopupOpen}
      onClose = {closeAllPopups}
      />
      <EditProfilePopup 
      isOpen = {isEditProfilePopupOpen}
      onClose = {closeAllPopups}
      />
      <AddPlacePopup 
      isOpen = {isAddPlacePopupOpen}
      onClose = {closeAllPopups}
      />
      <EditAvatarPopupOpen 
      isOpen = {isEditAvatarPopupOpen}
      onClose = {closeAllPopups}
      />

    </div>
  );
}

export default App;
