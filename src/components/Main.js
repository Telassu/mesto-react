import React, { useContext, useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main (props) {

  const currentUser = useContext(CurrentUserContext)

  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getInitialCards()
    .then((cards) => {
      setCards(cards)
    })
    .catch((err) => {
      console.log('ERROR! =>', err)
    })
  }, [])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}
  
  return (
    <div className="content">
      <section className="profile">
        <div style ={{backgroundImage: `url(${currentUser.avatar})`}} className="profile__avatar-container">
          <button className="profile__avatar-button" onClick={props.onEditAvatar} type="button" aria-label="изменить аватар"></button>
        </div>
        <div className="profile-info">
          <h1 className="profile-info__name">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button" aria-label="изменить профиль" onClick={props.onEditProfilePopupOpen}></button>
          <p className="profile-info__description">{currentUser.about}</p>
        </div>
        <button name="add-button" className="profile__add-button" 
        type="button" aria-label="добавить место" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
        {cards.map((card) => {
          console.log(card)
          return (
          <Card
          key = {card._id}
          owner = {card.owner}
          src={card.link} 
          alt={card.name}
          likes = {card.likes.length}
          onCardClick={props.onCardClick}
          onCardLike={handleCardLike}
          >
          </Card>
          )
        })}
        </ul>
      </section>
    </div>
  );
}

export default Main;