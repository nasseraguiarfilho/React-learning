import './styles.css';
import P from 'prop-types';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post-square" key={id}>
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.string,
  cover: P.string,
  body: P.string,
  id: P.number,
};
