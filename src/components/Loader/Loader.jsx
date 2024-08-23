import { AiOutlineLoading3Quarters } from "react-icons/ai";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <AiOutlineLoading3Quarters />
    </div>
  );
};

export default Loader;
