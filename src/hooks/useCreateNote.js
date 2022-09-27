import { useNavigate } from "react-router-dom";
import { createNote } from "../utils/network-data";
import pathData from "../utils/path-data";
import { swalAlert } from "../utils/sweetAlert";
import useLanguageContext from "./useLanguageContext";
import useUserContext from "./useUserContext";

const useCreateNote = () => {
  const {
    lang: { alerts },
  } = useLanguageContext();
  const { logoutHandler } = useUserContext();
  const navigate = useNavigate();

  const createNoteHandler = async (title, body) => {
    const { error, code } = await createNote(title, body);
    if (!error) {
      swalAlert(alerts.noteAction.addNoteSuccess, { icon: "success" });
      navigate(pathData.NOTES, { replace: true });
    } else if (error && code === 401) {
      swalAlert(alerts.authAction.userSession, { icon: "info" });
      logoutHandler();
    } else {
      swalAlert(alerts.noteAction.addNoteFail, { icon: "error" });
    }
  };

  return {
    createNoteHandler,
  };
};

export default useCreateNote;
