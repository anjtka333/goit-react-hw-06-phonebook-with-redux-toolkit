import s from "./ContactList.module.scss";
import PropTypes from "prop-types";

const ContactList = ({ contactsFiltered, onClick }) => {
  const filteredList = contactsFiltered();
  return (
    <ul className={s.ulStyle}>
      {filteredList.map((item) => {
        const delItem = () => onClick(item.id);
        return (
          <li key={item.id}>
            {item.name} {item.number}
            <button
              className={s.btn}
              type="button"
              name={item.id}
              onClick={delItem}
            >
              Del
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactsFiltered: PropTypes.func,
  onClick: PropTypes.func,
};

export default ContactList;
