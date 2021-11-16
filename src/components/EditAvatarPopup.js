import React from "react";
import PopupWithForm from "./PopupWithForm";

const [isEditAvatarPopupOpen, handleEditAvatarPopupOpen] = React.useState(false);

function handleEditAvatarClick() {
    handleEditAvatarPopupOpen(true);
  };

function EditAvatarPopup(props, enabled) {
return(
    <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClosePopup={closeAllPopups} buttonName='Сохранить'>
        <input type="url" className="popup__input" name="link" id="profile-avatar" placeholder="Ссылка на картинку" required />
        <p className="popup__error" id="profile-avatar-error" />
    </PopupWithForm>
);
}
export default EditAvatarPopup;