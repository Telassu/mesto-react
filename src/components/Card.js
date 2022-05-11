import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card (props) {
  const currentUser = useContext(CurrentUserContext)

  const isOwn = props.owner._id === currentUser._id;
  //const isLiked = props.likes.some((i) => i._id === currentUser._id);

  //console.log(isLiked)

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `'element__delete' ${isOwn 
    ? ' ' 
    : 'element__delete element__delete_hidden'}`
    )

  
// Создаём переменную, которую после зададим в `className` для кнопки лайка
//  const cardLikeButtonClassName = (
//    `element__like ${isLiked
//    ? 'element__like element__like_active' 
//    : 'element__like element__like_disactive'}`
//    );


  function handleClick() {
    props.onCardClick(props);
  } 

  function handleLikeClick() {
    props.onCardLike(props);
  } 

  return (
      <li className="element">
        <img className="element__image" 
        src={props.src} 
        alt={props.alt}
        onClick={handleClick}
        onLike={handleLikeClick}
        />
        <button className={cardDeleteButtonClassName} type="button" aria-label="удалить"></button>
        <div className="element__text">
          <h2 className="element__title">{props.alt}</h2>
          <div className="element__like-container">
            <button className="element__like" type="button" aria-label="нравится"></button>
            <p className="element__like-counter">{props.likes}</p>
          </div>
        </div>
      </li>
  )
}

export default Card;