import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main (props) {

  const [userName, setUserName] = React.useState ()
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()
  const [cards, setCards] = React.useState([])

  React.useEffect (() => {
    api.getUserInfo()
    .then ((res) => {
      setUserName(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    })
    .catch((err) => {
      console.log('ERROR! =>', err)
    })
  })

  React.useEffect(() => {
    api.getInitialCards()
    .then((cards) => {
      setCards(cards)
    })
    .catch((err) => {
      console.log('ERROR! =>', err)
    })
  })
  
  return (
    <div className="content">
      <section className="profile">
        <div style ={{backgroundImage: `url(${userAvatar})`}} className="profile__avatar-container">
          <button className="profile__avatar-button" onClick={props.onEditAvatar} type="button" aria-label="изменить аватар"></button>
        </div>
        <div className="profile-info">
          <h1 className="profile-info__name">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="изменить профиль" onClick={props.onEditProfilePopupOpen}></button>
          <p className="profile-info__description">{userDescription}</p>
        </div>
        <button name="add-button" className="profile__add-button" 
        type="button" aria-label="добавить место" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
        {cards.map((card) => {
          return (
          <Card
          key = {card._id}
          src={card.link} 
          alt={card.name}
          likes = {card.likes.length}
          onCardClick={props.onCardClick}
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