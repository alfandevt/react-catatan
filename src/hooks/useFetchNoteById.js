import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNote } from "../utils/network-data";
import { swalAlert } from "../utils/sweetAlert";
import useLanguageContext from "./useLanguageContext";
import useUserContext from "./useUserContext";

const useFetchNoteById = () => {
  const navigate = useNavigate();
  const {
    lang: { alerts },
  } = useLanguageContext();
  const { logoutHandler } = useUserContext();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (noteId) => {
    const { data, error, code } = await getNote(noteId);
    if (!error) {
      setNote(data);
    } else if (error && code === 403) {
      swalAlert(alerts.authAction.forbiddenNote, { icon: "error" });
      navigate("/");
    } else if (error && code === 401) {
      swalAlert(alerts.authAction.userSession, { icon: "info" });
      logoutHandler();
    }
    setLoading(false);
  };

  return { note, loading, fetchData };
};

export default useFetchNoteById;
