import PropTypes from "prop-types";

function MovieDetail({ coverImg, title, rating, like, description }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <span>⭐️ {rating}</span>
      <span>👍 {like}</span>
      <p>{description}</p>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number,
  like: PropTypes.number,
};

export default MovieDetail;
