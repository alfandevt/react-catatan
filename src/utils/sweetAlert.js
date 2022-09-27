import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

export const swalAlert = (message, options = {}) => {
  mySwal.fire({
    ...options,
    titleText: message,
    timer: 2000,
    confirmButtonColor: "#0f79d5",
  });
};

export default mySwal;
