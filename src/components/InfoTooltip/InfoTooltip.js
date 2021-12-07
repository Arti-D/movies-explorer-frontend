function InfoTooltip(props) {
  const statusClassName = `popup-status__img ${
    props.isSuccess
      ? "popup-status__img_ok"
      : "popup-status__img_wrong"
  }`;
  return (
    <div
      className={`popup ${props.isOpen && "popup_opened"}`}
    >
      <div className="popup__content">
        <div className={statusClassName}></div>
        <p className="popup__title popup__title_register">
          {props.isSuccess
            ? "Данные изменены!"
            : "Что-то пошло не так( Попробуйте еще раз."}
        </p>
        <button
          type="button"
          className="popup__close-btn"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
