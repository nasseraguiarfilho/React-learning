import './styles.css';
import P from 'prop-types';

export const Button = ({ onClick, text, disabled = false }) => {
  return (
    <button className="button-load-posts" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: P.func,
  text: P.string,
  disabled: P.bool,
};
