import React from "react";
import { RiContactsFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.listItem}>
      <span className={s.item}>
        <span className={s.span}>
          <RiContactsFill />
          {name}:
        </span>
        <span className={s.span}>
          <FaPhoneAlt />
          {number}
        </span>
      </span>
      <button className={s.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
