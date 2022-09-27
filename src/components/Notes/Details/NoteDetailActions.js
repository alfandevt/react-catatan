import "../../../styles/Notes/Details/NoteDetailActions.css";
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  BiArchiveIn,
  BiArchiveOut,
  BiTrash,
  BiArrowBack,
} from "react-icons/bi";

const NoteDetailActions = ({
  id,
  archived,
  onArchive,
  onUnarchive,
  onDelete,
}) => {
  const navigate = useNavigate();

  const onGoBackHandler = () => {
    if (archived) {
      navigate("/catatan-arsip", { replace: true });
    } else {
      navigate("/catatan-aktif", { replace: true });
    }
  };

  const onMoveHandler = () => {
    if (archived) {
      onUnarchive(id);
    } else {
      onArchive(id);
    }
  };

  const onDeleteHandler = (id) => {
    onDelete(id);
  };

  return (
    <div className="note-detail__action-group">
      <button
        className="note-detail__action-button back"
        onClick={() => onGoBackHandler()}
      >
        <BiArrowBack />
      </button>
      <button
        className="note-detail__action-button move"
        onClick={() => onMoveHandler(id)}
      >
        {archived ? <BiArchiveOut /> : <BiArchiveIn />}
      </button>
      <button
        className="note-detail__action-button remove"
        onClick={() => onDeleteHandler(id)}
      >
        <BiTrash />
      </button>
    </div>
  );
};

NoteDetailActions.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetailActions;
