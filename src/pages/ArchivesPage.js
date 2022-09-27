import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/Notes/List/NoteList";
import SearchBox from "../components/Notes/SearchBox/SearchBox";
import Spinner from "../components/Spinner/Spinner";
import useFetchArchivedNotes from "../hooks/useFetchArchivedNotes";
import useLanguageContext from "../hooks/useLanguageContext";

const ArchivesPage = () => {
  const { lang } = useLanguageContext();
  const [searchParams] = useSearchParams();
  const [debouncedParams, setDebouncedParams] = useState(null);
  const { filteredNotes, search, loading, setLoading } =
    useFetchArchivedNotes();

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
    <section className="note-page arhives-page">
      {loading && <Spinner />}
      <h2 className="note-page__heading">
        {lang.archiveNotePage.sectionHeading}
      </h2>
      <SearchBox placeholder={lang.archiveNotePage.inputPlaceholder} />
      <NoteList
        itemButtonLabel={lang.archiveNotePage.itemButtonLabel}
        emptyDataLabel={lang.archiveNotePage.emptyDataLabel}
        dateLangId={lang.id}
        notes={filteredNotes}
      />
    </section>
  );
};

export default ArchivesPage;
