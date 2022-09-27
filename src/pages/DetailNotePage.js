import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/Notes/Details/NoteDetail";
import NoteDetailActions from "../components/Notes/Details/NoteDetailActions";
import Spinner from "../components/Spinner/Spinner";
import useFetchNoteById from "../hooks/useFetchNoteById";
import useLanguageContext from "../hooks/useLanguageContext";
import useNoteActions from "../hooks/useNoteActions";

const DetailNotePage = () => {
  const { lang } = useLanguageContext();
  const { noteId } = useParams();
  const { note, loading, fetchData } = useFetchNoteById();
  const { archiveNoteHandler, unArchiveNoteHandler, deleteNoteHandler } =
    useNoteActions();

  useEffect(() => {
    fetchData(noteId);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="note-page note-detail-page">
      <h2 className="note-page__heading">
        {note?.archived
          ? lang.archiveNotePage.sectionHeading
          : lang.activeNotePage.sectionHeading}
      </h2>
      <NoteDetail dateLangId={lang.id} {...note} />
      <NoteDetailActions
        {...note}
        onArchive={archiveNoteHandler}
        onUnarchive={unArchiveNoteHandler}
        onDelete={deleteNoteHandler}
      />
    </section>
  );
};

export default DetailNotePage;
