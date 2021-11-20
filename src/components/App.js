import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeletePlacePopup from './DeletePlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [editProfilePopupState, setEditProfilePopupState] = useState(false);
  const [addPlacePopupState, setAddPlacePopupState] = useState(false);
  const [deletePlacePopupState, setDeletePlacePopupState] = useState(false);
  const [editAvatarPopupState, setEditAvatarPopupState] = useState(false);
  const [imgPopupState, setImgPopupState] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const errorShow = (err) => console.error(err);

  const closeAllPopups = () => {
    setEditProfilePopupState(false);
    setAddPlacePopupState(false);
    setEditAvatarPopupState(false);
    setImgPopupState(false);
    setDeletePlacePopupState(false);
  };

  useEffect(() => {
    const escHandler = (evt) => evt.key === 'Escape' && closeAllPopups();
    document.addEventListener('keydown', escHandler);
    return () => {
      document.removeEventListener('keydown', escHandler);
    };
  }, []);

  useEffect(() => {
    api
      .getInitData()
      .then((data) => {
        const [userData, initCards] = data;
        setCurrentUser(userData);
        setCards(initCards);
      })
      .catch((err) => errorShow(err));
  }, []);

  const openEditProfilePopup = () => {
    setEditProfilePopupState(true);
  };

  const openAddPlacePopup = () => {
    setAddPlacePopupState(true);
  };

  const openEditAvatarPopup = () => {
    setEditAvatarPopupState(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setImgPopupState(true);
  };

  const handleLikeClick = (card, isLiked) => {
    const update = (newCard) => {
      setCards(cards.map((c) => (c._id === card._id ? newCard : c)));
    };
    return isLiked
      ? api.removeLike(card).then(update).catch(errorShow)
      : api.setLike(card).then(update).catch(errorShow);
  };

  const handleUpdateUser = async (newInfo) => {
    let state = false;
    await api
      .setUserInfo(newInfo)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
        state = true;
      })
      .catch(errorShow);
    return state ? Promise.resolve() : Promise.reject();
  };

  const handleUpdateAvatar = async ({ avatar }) => {
    let state = false;
    await api
      .uploadAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
        state = true;
      })
      .catch(errorShow);
    return state ? Promise.resolve() : Promise.reject();
  };

  const handleAddPlaceSubmit = async (card) => {
    let state = false;
    await api
      .postCard(card)
      .then((data) => {
        setCards([data, ...cards]);
        closeAllPopups();
        state = true;
      })
      .catch(errorShow);
    return state ? Promise.resolve() : Promise.reject();
  };

  const handleDeleteClick = (card) => {
    setSelectedCard(card);
    setDeletePlacePopupState(true);
  };

  const handleDeletePlaceSubmit = async () => {
    let state = false;
    await api
      .removeCard(selectedCard)
      .then(() => {
        setCards(cards.filter((c) => c._id !== selectedCard._id));
        closeAllPopups();
        state = true;
      })
      .catch(errorShow);
    return state ? Promise.resolve() : Promise.reject();
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            onEditProfile={openEditProfilePopup}
            onAddPlace={openAddPlacePopup}
            onEditAvatar={openEditAvatarPopup}
            onCardClick={handleCardClick}
            onCardLike={handleLikeClick}
            onCardDelete={handleDeleteClick}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={editProfilePopupState}
            onUpdateUser={handleUpdateUser}
            onClose={closeAllPopups}
          />
          <EditAvatarPopup
            isOpen={editAvatarPopupState}
            onUpdateAvatar={handleUpdateAvatar}
            onClose={closeAllPopups}
          />
          <AddPlacePopup
            isOpen={addPlacePopupState}
            onAddPlace={handleAddPlaceSubmit}
            onClose={closeAllPopups}
          />
          <DeletePlacePopup
            isOpen={deletePlacePopupState}
            onCardDelete={handleDeletePlaceSubmit}
            onClose={closeAllPopups}
          />
          <ImagePopup card={selectedCard} isOpen={imgPopupState} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
