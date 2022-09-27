import "../../../styles/Notes/Forms/NoteForm.css";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NoteTitleInput from "./NoteTitleInput";
import NoteContentEditable from "./NoteContentEditable";
import NoteCommandGroup from "./NoteCommandGroup";

const NoteForm = ({ onCreateNote }) => {
  const navigate = useNavigate();
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const [btnSaveDisable, setBtnSaveDisable] = useState(true);
  const [noteTitleIsValid, setNoteTitleIsValid] = useState(false);
  const [noteBodyIsValid, setNoteBodyIsValid] = useState(false);
  const [focusClass, setFocusClass] = useState("");

  const validate = () => {
    if (noteTitleIsValid && noteBodyIsValid) {
      setBtnSaveDisable(false);
    } else {
      setBtnSaveDisable(true);
    }
  };

  useEffect(validate, [noteTitleIsValid, noteBodyIsValid]);

  const onSaveHandler = () => {
    onCreateNote(noteTitle, noteBody);
  };
  const onCancelHandler = () => {
    navigate(-1);
  };
  const onFocusHandler = () => {
    setFocusClass("focus");
  };
  const onBlurHandler = () => {
    setFocusClass("");
  };

  const onNoteTitleIsValidHandler = (validity) => {
    setNoteTitleIsValid(validity);
  };

  const onNoteBodyIsValidHandler = (validity) => {
    setNoteBodyIsValid(validity);
  };

  return (
    <section className="note-form">
      <div className={`note-form__overlay ${focusClass}`}></div>
      <div className={`note-form__form-group ${focusClass}`}>
        <NoteTitleInput
          noteTitle={noteTitle}
          onSetTitle={setNoteTitle}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onNoteTitleIsValid={onNoteTitleIsValidHandler}
        />
        <NoteContentEditable
          noteBody={noteBody}
          onSetBody={setNoteBody}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onNoteBodyIsValid={onNoteBodyIsValidHandler}
        />
        <NoteCommandGroup />

        <div className="note-form__btn-group">
          <button
            className="note-form__btn-save"
            disabled={btnSaveDisable}
            onClick={onSaveHandler}
          >
            Simpan
          </button>
          <button className="note-form__btn-cancel" onClick={onCancelHandler}>
            Kembali
          </button>
        </div>
      </div>
    </section>
  );
};

NoteForm.propTypes = {
  onCreateNote: PropTypes.func.isRequired,
};

export default NoteForm;
