import { useEffect, useState } from "react";
import { filterList } from "../utils";
import { getArchivedNotes } from "../utils/network-data";
import useUserContext from "./useUserContext";

const useFetchArchivedNotes = () => {
  const { logoutHandler } = useUserContext();
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, error, code } = await getArchivedNotes();
    if (!error) {
      setNotes(data);
      setFilteredNotes(data);
    } else if (error && code === 401) {
      logoutHandler();
    }
    setLoading(false);
  };

  const search = (params) => {
    if (params) {
      const filtered = filterList(notes, "title", params);
      setFilteredNotes(filtered);
    } else {
      setFilteredNotes(notes);
    }
  };

  return { filteredNotes, loading, setLoading, search };
};

export default useFetchArchivedNotes;
