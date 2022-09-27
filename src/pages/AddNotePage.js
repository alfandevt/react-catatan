import React, { useEffect } from "react";
import NoteForm from "../components/Notes/Forms/NoteForm";
import useCreateNote from "../hooks/useCreateNote";
import useUserContext from "../hooks/useUserContext";

const AddNotePage = () => {
  const { getMe } = useUserContext();
  const { createNoteHandler } = useCreateNote();

  useEffect(() => {
    getMe();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="note-page add-note-page">
      <h2 className="note-page__heading">Catatan Baru</h2>
      <NoteForm onCreateNote={createNoteHandler} />
    </section>
  );
};

export default AddNotePage;
