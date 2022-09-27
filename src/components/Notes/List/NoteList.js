import "../../../styles/Notes/List/NoteList.css";
import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const NoteList = ({ notes, itemButtonLabel, dateLangId, emptyDataLabel }) => {
  const renderedNotes = notes.map((note) => {
    return (
      <NoteItem
        dateLangId={dateLangId}
        itemButtonLabel={itemButtonLabel}
        key={note.id}
        {...note}
      />
    );
  });

  const noItemText = (
    <span className="note-list__no-item">{emptyDataLabel}</span>
  );

  return (
    <section className="note-list">
      {notes.length > 0 ? renderedNotes : noItemText}
    </section>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      body: PropTypes.string,
      createdAt: PropTypes.string,
      archived: PropTypes.bool,
    })
  ).isRequired,
  itemButtonLabel: PropTypes.string.isRequired,
  dateLangId: PropTypes.string.isRequired,
  emptyDataLabel: PropTypes.string.isRequired,
};

export default NoteList;
