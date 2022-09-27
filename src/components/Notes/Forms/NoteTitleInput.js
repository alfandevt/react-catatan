import "../../../styles/Notes/Forms/NoteTitleInput.css"
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { charLengthLeft } from "../../../utils";

const NoteTitleInput = ({
  noteTitle,
  onSetTitle,
  onFocus,
  onBlur,
  onNoteTitleIsValid,
}) => {
  const charLimit = 50;
  const [counter, setCounter] = useState(charLimit);

  useEffect(() => {
    if (noteTitle) {
      setCounter(charLengthLeft(charLimit, noteTitle.length));
      onNoteTitleIsValid(true);
    } else {
      onNoteTitleIsValid(false);
    }
    // eslint-disable-next-line
  }, [noteTitle]);

  const charLeftCounter = (text) => {
    let textLength = text.length;
    setCounter(charLengthLeft(charLimit, textLength));
    return text;
  };

  const onTitleChangedHandler = (event) => {
    const title = charLeftCounter(event.target.value);
    onSetTitle(title);
  };

  const onTitleChangedLimiter = (event) => {
    if (event.target.value.length === charLimit && event.key !== "Backspace") {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const onFocusHandler = () => {
    onFocus();
  };

  const onBlurHandler = () => {
    onBlur();
  };

  return (
    <>
      <span className="note-form__counter">Sisa karakter: {counter}</span>
      <input
        className="note-form__input"
        type="text"
        placeholder="Catatan..."
        value={noteTitle}
        onKeyDown={onTitleChangedLimiter}
        onChange={onTitleChangedHandler}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
    </>
  );
};

NoteTitleInput.propTypes = {
  noteTitle: PropTypes.string.isRequired,
  onSetTitle: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onNoteTitleIsValid: PropTypes.func.isRequired,
};

export default NoteTitleInput;
