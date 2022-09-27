import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const useLanguageContext = () => useContext(LanguageContext);

export default useLanguageContext;
