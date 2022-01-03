import s from '../Filter/Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Найти контакт по имени
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
