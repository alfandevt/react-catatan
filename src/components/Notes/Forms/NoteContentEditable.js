import "../../../styles/Notes/Forms/NoteContentEditable.css"
import React, { useEffect, useState, createRef } from "react";
import PropTypes from "prop-types";

const NoteContentEditable = ({
  noteBody,
  onSetBody,
  onFocus,
  onBlur,
  onNoteBodyIsValid,
}) => {
  const bodyHeightLimit = 350;
  const [body, setBody] = useState("");

  let editorRef = createRef();

  useEffect(() => {
    if (noteBody && editorRef) {
      editorRef.current.innerHTML = noteBody;
      onNoteBodyIsValid(true);
    }
    // eslint-disable-next-line
  }, [noteBody]);

  useEffect(() => {
    if (!body || body === "<br>") {
      onNoteBodyIsValid(false);
    } else {
      onNoteBodyIsValid(true);
    }
    // eslint-disable-next-line
  }, [body]);

  const onBodyInputHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const onBodyKeyDownLimiter = (event) => {
    if (event.target.clientHeight > bodyHeightLimit && event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const onFocusHandler = (event) => {
    onFocus();
  };

  const onBlurHandler = () => {
    onBlur();
    onSetBody(body);
  };

  return (
    <div
      ref={editorRef}
      className="note-form__editable"
      dataplaceholder="Isi catatan..."
      suppressContentEditableWarning
      contentEditable
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      onKeyDown={onBodyKeyDownLimiter}
      onInput={onBodyInputHandler}
    ></div>
  );
};

NoteContentEditable.propTypes = {
  noteBody: PropTypes.string.isRequired,
  onSetBody: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onNoteBodyIsValid: PropTypes.func.isRequired,
};

export default NoteContentEditable;
