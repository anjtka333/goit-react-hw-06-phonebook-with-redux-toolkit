import PropTypes from "prop-types";

const Filter = ({ value, onChange, inputStyle }) => {
  return (
    <label>
      Find contact by name
      <input
        name="filter"
        value={value}
        onChange={onChange}
        className={inputStyle}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
