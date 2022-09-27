import "../../../styles/Notes/Forms/NoteCommandGroup.css";
import React from "react";
import NoteCommandButton from "./NoteCommandButton";

const NoteCommandGroup = () => {
  return (
    <div className="note-form__cmd-group">
      <NoteCommandButton command="bold" />
      <NoteCommandButton command="italic" />
      <NoteCommandButton command="underline" />
    </div>
  );
};

export default NoteCommandGroup;
