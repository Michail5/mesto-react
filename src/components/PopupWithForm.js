import React from "react";

class PopupWithForm extends React.Component{

  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    this.setState({ submitted: true });
  };

  render() {
    if (this.props.isOpen) {
      this._openedClass = 'popup_opened';
    }
    if (this.props.onClose) {
      this._openedClass = ' ';
    }
    return (
      <section className={`popup popup-${this.props.name} ${this._openedClass}`} >
        <div className="popup__container">
            <button type="reset" className="popup__close-button" onClick={this.props.onClosePopup}/>
            <h2 className="popup__title">{this.props.title}</h2>
            <form className={`popup__form popup__form_${this.props.name}`} name="submit-user">
            {this.props.children} 
           
            </form>
           
        </div>
    </section> 
    )
  }
}
export default PopupWithForm;