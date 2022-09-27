import { useNavigate } from "react-router-dom";
import { archiveNote, unarchiveNote, deleteNote } from "../utils/network-data";
import { swalAlert } from "../utils/sweetAlert";
import useUserContext from "./useUserContext";

const useNoteActions = () => {
  const { logoutHandler } = useUserContext();
  const navigate = useNavigate();

  const archiveNoteHandler = async (noteId) => {
    const { error, code } = await archiveNote(noteId);
    if (!error) {
      swalAlert("Berhasil memindahkan catatan!", { icon: "success" });
      navigate("/catatan-arsip", { replace: true });
    } else if (error && code === 403) {
      swalAlert("Gagal memindahkan catatan!", { icon: "error" });
      navigate("/");
    } else if (error && code === 401) {
      logoutHandler();
    }
  };

  const unArchiveNoteHandler = async (noteId) => {
    const { error, code } = await unarchiveNote(noteId);
    if (!error) {
      swalAlert("Berhasil memindahkan catatan!", { icon: "success" });
      navigate("/catatan-aktif", { replace: true });
    } else if (error && code === 403) {
      swalAlert("Gagal memindahkan catatan!", { icon: "error" });
      navigate("/");
    } else if (error && code === 401) {
      logoutHandler();
    }
  };

  const deleteNoteHandler = async (noteId) => {
    const { error, code } = await deleteNote(noteId);
    if (!error) {
      swalAlert("Berhasil menghapus catatan!", { icon: "success" });
      navigate("/", { replace: true });
    } else if (error && code === 403) {
      swalAlert("Gagal menghapus catatan!", { icon: "error" });
      navigate("/");
    } else if (error && code === 401) {
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
