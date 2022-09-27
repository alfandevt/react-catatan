import "../../../styles/Notes/Details/NoteDetail.css";
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { showFormattedDate } from "../../../utils/index";

const NoteDetail = ({ title, body, createdAt }) => {
  return (
    <article className="note-detail">
      <h3 className="note-detail__title">{title}</h3>
      <p className="note-detail__date">{showFormattedDate(createdAt)}</p>
      <p className="note-detail__body">{parse(body)}</p>
    </article>
  );
};

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
