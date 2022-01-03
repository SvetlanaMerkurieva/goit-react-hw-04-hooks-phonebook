import PropTypes from 'prop-types';
import s from '../IconButton/IconButton.module.css';

export const IconButton = ({ children, onClick, ...allProps }) => (
  <button
    type="button"
    className={s.iconButton}
    onClick={onClick}
    {...allProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'arial-label': PropTypes.string.isRequired,
};
