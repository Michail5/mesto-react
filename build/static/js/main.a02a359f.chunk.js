(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(10),s=n.n(c),r=(n(16),n(11)),i=n(2),u=n.p+"static/media/logo.bbe2a6ea.svg",p=n(0);var l=function(){return Object(p.jsx)("header",{className:"header",children:Object(p.jsx)("a",{href:"#",className:"header__link",children:Object(p.jsx)("img",{src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"})})})};var d=function(e){c=c.bind(this),s=s.bind(this),r=r.bind(this);var t=e.card.owner._id===e.currentUser._id,n=" ".concat(t?"element__remove-button":"element__remove-button_hidden"),a=e.card.likes.some((function(t){return t._id===e.currentUser._id})),o="element__heart-button  ".concat(a?"element__heart-button-active":" ");function c(){e.onCardClick(e.card)}function s(){e.onCardLike(e.card,e.currentUser,e.setCards)}function r(){e.onCardDelete(e.card,e.setCards)}return Object(p.jsxs)("article",{className:"element",children:[Object(p.jsx)("img",{src:e.card.link,alt:e.card.name,className:"element__image",onClick:c}),Object(p.jsx)("button",{className:n,type:"button",onClick:r}),Object(p.jsxs)("div",{className:"element__title-block",children:[Object(p.jsx)("p",{className:"element__title",children:e.card.name}),Object(p.jsxs)("div",{className:"element__likes",children:[Object(p.jsx)("button",{className:o,type:"button",onClick:s}),Object(p.jsx)("p",{className:"element__likes-number",children:e.card.likes.length})]})]})]})},j=o.a.createContext(),_=o.a.createContext();var m=function(e){var t=o.a.useContext(j),n=o.a.useContext(_);function a(e){var n=e.cards.map((function(n){return Object(p.jsx)(d,{card:n,onCardClick:e.onCardClick,currentUser:t,onCardLike:e.onCardLike,setCards:e.setCards,onCardDelete:e.onCardDelete},n._id)}));return Object(p.jsx)("section",{className:"elements",children:n})}return Object(p.jsxs)("main",{children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsxs)("div",{className:"profile__avatar-conteiner",children:[Object(p.jsx)("div",{className:"profile__avatar-overlay",onClick:e.onEditAvatar}),Object(p.jsx)("img",{src:t.avatar,alt:t.name,className:"profile__avatar"}),Object(p.jsx)("button",{className:"profile__avatar-button",onClick:e.onEditAvatar})]}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__title-block",children:[Object(p.jsx)("h1",{className:"profile__title",children:t.name}),Object(p.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile})]}),Object(p.jsx)("p",{className:"profile__text",children:t.about})]}),Object(p.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(p.jsx)(a,{cards:n,onCardClick:e.onCardClick,onCardLike:e.onCardLike,setCards:e.setCards,onCardDelete:e.onCardDelete})]})};var b=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__text",children:"\xa9 2021  Michael Yakovlev"})})},h=n(3),f=n(4),O=n(8),x=n(7),v=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleSubmit=function(){e.setState({submitted:!0})},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(p.jsx)("section",{className:"popup popup-".concat(this.props.name," ").concat(this.props.isOpen?"popup_is-opened":""),children:Object(p.jsxs)("div",{className:"popup__content popup__content_".concat(this.props.name),children:[Object(p.jsx)("button",{className:"popup__close popup__close-".concat(this.props.name),type:"button",onClick:this.props.onClosePopup}),Object(p.jsx)("h3",{className:"popup__title",children:this.props.title}),Object(p.jsx)("form",{className:"popup__form popup__form_".concat(this.props.name),name:"submit-user",onSubmit:this.props.onSubmit,children:this.props.children})]})})}}]),n}(o.a.Component),C=v,k=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return null!==this.props.card?Object(p.jsx)("section",{className:"popup popup_img popup_is-opened",children:Object(p.jsxs)("div",{className:"popup__content popup__content_img",children:[Object(p.jsx)("button",{className:"popup__close popup__close_img",type:"button",onClick:this.props.onClosePopup}),Object(p.jsx)("img",{src:this.props.card.link,alt:this.props.card.name,className:"popup__image"}),Object(p.jsx)("h3",{className:"popup__title popup__title_img",children:this.props.card.name})]})}):Object(p.jsx)("section",{className:"popup popup_img"})}}]),n}(o.a.Component),N=k,g=new(function(){function e(t,n){Object(h.a)(this,e),this._url=t,this._token=n}return Object(f.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"getUserData",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"setUserData",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"postCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"getCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}}]),e}())("https://mesto.nomoreparties.co/v1/cohort-28","9c2e4842-eec0-466f-b33e-0c19fe7195ce");var y=function(e){var t=o.a.useState(""),n=Object(i.a)(t,2),a=n[0],c=n[1],s=o.a.useState(""),r=Object(i.a)(s,2),u=r[0],l=r[1],d=o.a.useContext(j);return o.a.useEffect((function(){c(d.name),l(d.about)}),[d]),Object(p.jsxs)(C,{name:"user",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClosePopup:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:u})},onUpdateUser:e.onUpdateUser,children:[Object(p.jsxs)("label",{className:"popup__form-field",children:[Object(p.jsx)("input",{type:"text",id:"name-input",className:"popup__input popup__input_type_name",placeholder:"\u0418\u043c\u044f",name:"name",required:!0,minLength:"2",maxLength:"40",value:a,onChange:function(e){c(e.target.value)}}),Object(p.jsx)("span",{id:"name-input-error",className:"popup__input-error"})]}),Object(p.jsxs)("label",{className:"popup__form-field",children:[Object(p.jsx)("input",{type:"text",id:"work-input",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_type_work",name:"about",required:!0,minLength:"2",maxLength:"200",value:u,onChange:function(e){l(e.target.value)}}),Object(p.jsx)("span",{id:"work-input-error",className:"popup__input-error"})]}),Object(p.jsx)("button",{className:"popup__submit-btn popup__submit-btn_edit",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var P=function(e){var t=o.a.useContext(j),n=o.a.useRef("");return Object(p.jsxs)(C,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClosePopup:e.onClose,onSubmit:function(a){a.preventDefault(),n.current.focus(),t.avatar=n.current.value,e.onUpdateAvatar(t)},onUpdateAvatar:e.onUpdateAvatar,children:[Object(p.jsxs)("label",{className:"popup__form-field",children:[Object(p.jsx)("input",{ref:n,type:"url",id:"url-input_avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_avatar-img",name:"link",required:!0}),Object(p.jsx)("span",{id:"url-input_avatar-error",className:"popup__input-error"})]}),Object(p.jsx)("button",{className:"popup__submit-btn popup__submit-btn_avatar",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var S=function(e){o.a.useContext(j);var t=o.a.useContext(_),n=o.a.useState(""),a=Object(i.a)(n,2),c=a[0],s=a[1],r=o.a.useState(""),u=Object(i.a)(r,2),l=u[0],d=u[1];return Object(p.jsxs)(C,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClosePopup:e.onClose,onSubmit:function(n){n.preventDefault(),e.onAddPlace({name:c,link:l},t)},children:[Object(p.jsxs)("label",{className:"popup__form-field",children:[Object(p.jsx)("input",{type:"text",id:"place-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_type_place-name",name:"name",required:!0,minLength:"2",maxLength:"30",value:c,onChange:function(e){s(e.target.value)}}),Object(p.jsx)("span",{id:"place-input-error",className:"popup__input-error"})]}),Object(p.jsxs)("label",{className:"popup__form-field",children:[Object(p.jsx)("input",{type:"url",id:"url-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_place-img",name:"link",value:l,onChange:function(e){d(e.target.value)},required:!0}),Object(p.jsx)("span",{id:"url-input-error",className:"popup__input-error"})]}),Object(p.jsx)("button",{className:"popup__submit-btn popup__submit-btn_add",type:"submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})};var U=function(){var e=o.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=o.a.useState(!1),s=Object(i.a)(c,2),u=s[0],d=s[1],h=o.a.useState(!1),f=Object(i.a)(h,2),O=f[0],x=f[1],v=o.a.useState(null),k=Object(i.a)(v,2),U=k[0],L=k[1],A=o.a.useState({}),D=Object(i.a)(A,2),E=D[0],T=D[1],w=o.a.useState([]),z=Object(i.a)(w,2),q=z[0],J=z[1];function F(){x(!1),a(!1),d(!1),L(null)}return o.a.useEffect((function(){Promise.all([g.getUserData(),g.getInitialCards()]).then((function(e){T(e[0]),J(e[1])})).catch((function(e){return console.log(e),[]}))}),[]),Object(p.jsx)(j.Provider,{value:E,children:Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)(l,{}),Object(p.jsxs)(_.Provider,{value:q,children:[Object(p.jsx)(m,{onEditProfile:function(){a(!0)},onAddPlace:function(){d(!0)},onEditAvatar:function(){x(!0)},onCardClick:function(e){L(e)},setCards:J,onCardLike:function(e,t,n){var a=e.likes.some((function(e){return e._id===t._id}));g.changeLikeCardStatus(e._id,a,n).then((function(t){n((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e),[]}))},onCardDelete:function(e,t){g.deleteCard(e._id).then((function(){t((function(t){return t.filter((function(t){return t._id!=e._id}))}))})).catch((function(e){return console.log(e),[]}))}}),Object(p.jsx)(y,{isOpen:n,onClose:F,onUpdateUser:function(e){g.setUserData(e).then((function(e){T(e),F()})).catch((function(e){return console.log(e),[]}))}}),Object(p.jsx)(P,{isOpen:O,onClose:F,onUpdateAvatar:function(e){g.patchAvatar(e).then((function(e){T(e),F()})).catch((function(e){return console.log(e),[]}))}}),Object(p.jsx)(S,{isOpen:u,onClose:F,onAddPlace:function(e,t){g.postCard(e).then((function(e){J([e].concat(Object(r.a)(t))),F()})).catch((function(e){return console.log(e),[]}))}})]}),Object(p.jsx)(b,{}),Object(p.jsx)(N,{card:U,onClosePopup:F}),Object(p.jsx)(C,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",onClosePopup:F,children:Object(p.jsx)("button",{className:"popup__submit-btn popup__submit-btn_delete",type:"submit",children:"\u0414\u0430"})})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(U,{})}),document.getElementById("root")),L()}},[[18,1,2]]]);
//# sourceMappingURL=main.a02a359f.chunk.js.map