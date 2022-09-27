import { useNavigate } from "react-router-dom";
import { createNote } from "../utils/network-data";
import { swalAlert } from "../utils/sweetAlert";
import useUserContext from "./useUserContext";

const useCreateNote = () => {
  const { logoutHandler } = useUserContext();
  const navigate = useNavigate();

  const createNoteHandler = async (title, body) => {
    const { error, code, errorMessage } = await createNote(title, body);
    if (!error) {
      swalAlert("Berhasil menambah catatan!", { icon: "success" });
      navigate("/catatan-aktif", { replace: true });
    } else if (error && code === 401) {
      logoutHandler();
    } else {
      swalAlert(errorMessage, { icon: "error" });
    }
  };

  return {
    createNoteHandler,
  };
};

export default useCreateNote;
