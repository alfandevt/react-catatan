import { useNavigate } from "react-router-dom";
import { archiveNote, unarchiveNote, deleteNote } from "../utils/network-data";
import { swalAlert } from "../utils/sweetAlert";
import useLanguageContext from "./useLanguageContext";
import useUserContext from "./useUserContext";

const useNoteActions = () => {
  const navigate = useNavigate();
  const {
    lang: { alerts },
  } = useLanguageContext();
  const { logoutHandler } = useUserContext();

  const archiveNoteHandler = async (noteId) => {
    const { error, code } = await archiveNote(noteId);
    if (!error) {
      swalAlert(alerts.noteAction.moveNoteSuccess, { icon: "success" });
      navigate("/catatan-arsip", { replace: true });
    } else if (error && code === 403) {
      swalAlert(alerts.noteAction.moveNoteFail, { icon: "error" });
      navigate("/");
    } else if (error && code === 401) {
      swalAlert(alerts.authAction.userSession, { icon: "info" });
      logoutHandler();
    }
  };

  const unArchiveNoteHandler = async (noteId) => {
    const { error, code } = await unarchiveNote(noteId);
    if (!error) {
      swalAlert(alerts.noteAction.moveNoteSuccess, { icon: "success" });
      navigate("/catatan-aktif", { replace: true });
    } else if (error && code === 403) {
      swalAlert(alerts.noteAction.moveNoteFail, { icon: "error" });
      navigate("/");
    } else if (error && code === 401) {
      swalAlert(alerts.authAction.userSession, { icon: "info" });
      logoutHandler();
    }
  };

  const deleteNoteHandler = async (noteId) => {
    const { error, code } = await deleteNote(noteId);
    if (!error) {
      swalAlert(alerts.noteAction.deleteNoteSuccess, { icon: "success" });
      navigate("/", { replace: true });
    } else if (error && code === 403) {
      swalAlert(alerts.noteAction.deleteNoteFail, { icon: "error" });
      navigate("/");
    } else if (error && code === 401) {
      swalAlert(alerts.authAction.userSession, { icon: "info" });
      logoutHandler();
    }
  };

  return {
    archiveNoteHandler,
    unArchiveNoteHandler,
    deleteNoteHandler,
  };
};

export default useNoteActions;
