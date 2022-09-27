import "../../../styles/Notes/Forms/NoteCommandButton.css"
import React from "react";
import PropTypes from "prop-types";

const NoteCommandButton = ({ command }) => {
  const onMouseDownHandler = (event) => {
    try {
      event.preventDefault();
      document.execCommand(command, false, null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className={`note-form__cmd-btn ${command}`}
      onMouseDown={onMouseDownHandler}
    >
      {command}
    </button>
  );
};
NoteCommandButton.propTypes = {
  command: PropTypes.string.isRequired,
};

export default NoteCommandButton;
