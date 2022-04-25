import React from "react";

function Main ({onEditProfilePopupOpen, onAddPlace, onEditAvatar}) {
  
  return (
    <div className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img src="#" className="profile__avatar" alt="фотография пользователя" />
          <button className="profile__avatar-button" onClick={onEditAvatar} type="button" aria-label="изменить аватар"></button>
        </div>
        <div className="profile-info">
          <h1 className="profile-info__name">Жак-Ив Кусто</h1>
          <button className="profile__edit-button" type="button" aria-label="изменить профиль" onClick={onEditProfilePopupOpen}></button>
          <p className="profile-info__description">Исследователь океана</p>
        </div>
        <button name="add-button" className="profile__add-button" 
        type="button" aria-label="добавить место" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </div>
  );
}

export default Main;