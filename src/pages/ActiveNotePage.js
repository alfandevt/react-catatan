import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MdNoteAdd } from "react-icons/md";
import NoteList from "../components/Notes/List/NoteList";
import SearchBox from "../components/Notes/SearchBox/SearchBox";
import useFetchActiveNotes from "../hooks/useFetchActiveNotes";
import Spinner from "../components/Spinner/Spinner";
import useLanguageContext from "../hooks/useLanguageContext";

const ActiveNotePage = () => {
  const {
    lang: { activeNotePage },
  } = useLanguageContext();
  const [searchParams] = useSearchParams();
  const [debouncedParams, setDebouncedParams] = useState(null);
  const { filteredNotes, search, loading, setLoading } = useFetchActiveNotes();

  useEffect(() => {
    setLoading(true);
    const timerId = setTimeout(() => {
      const title = searchParams.get("title");
      setDebouncedParams(title);
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchParams]);

  useEffect(() => {
    search(debouncedParams);
  }, [debouncedParams]);

  return (
    <section className="note-page active-note-page">
      {loading && <Spinner />}
      <h2 className="note-page__heading">{activeNotePage.sectionHeading}</h2>
      <SearchBox placeholder={activeNotePage.inputPlaceholder} />
      <NoteList
        itemButtonLabel={activeNotePage.itemButtonLabel}
        notes={filteredNotes}
      />
      <Link to="/catatan/baru" className="note-page__add-btn">
        <MdNoteAdd />
      </Link>
    </section>
  );
};

export default ActiveNotePage;
