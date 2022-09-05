import './styles.css';
import P from 'prop-types';

export const SearchText = ({ onChange }) => {
  return <input type="search" placeholder="Find you post here" className="search-text" onChange={onChange} />;
};

SearchText.propTypes = {
  onChange: P.func.isRequired,
  searchValue: P.string.isRequired,
};
