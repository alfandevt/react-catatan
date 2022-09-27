import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MdNoteAdd } from "react-icons/md";
import NoteList from "../components/Notes/List/NoteList";
import SearchBox from "../components/Notes/SearchBox/SearchBox";
import useFetchActiveNotes from "../hooks/useFetchActiveNotes";
import Spinner from "../components/Spinner/Spinner";
import useLanguageContext from "../hooks/useLanguageContext";
import pathData from "../utils/path-data";

const ActiveNotePage = () => {
  const { lang } = useLanguageContext();
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
    // eslint-disable-next-line
  }, [searchParams]);

  useEffect(() => {
    search(debouncedParams);
    // eslint-disable-next-line
  }, [debouncedParams]);

  return (
    <section className="note-page active-note-page">
      {loading && <Spinner />}
      <h2 className="note-page__heading">
        {lang.activeNotePage.sectionHeading}
      </h2>
      <SearchBox placeholder={lang.activeNotePage.inputPlaceholder} />
      <NoteList
        itemButtonLabel={lang.activeNotePage.itemButtonLabel}
        emptyDataLabel={lang.activeNotePage.emptyDataLabel}
        dateLangId={lang.id}
        notes={filteredNotes}
      />
      <Link to={pathData.CREATE_NOTE} className="note-page__add-btn">
        <MdNoteAdd />
      </Link>
    </section>
  );
};

export default ActiveNotePage;
