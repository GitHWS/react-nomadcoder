import React from "react";
import PropTypes from "prop-types";
// Link를 사용하기 위해 react-router-dom으로부터 import를 하여 사용해야함
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={`${title} cover poster`} />
      <h2>
        {/* a태그를 사용하여 이동해도 되지만 페이지 전체가 새로고침이 된다는 단점이 있음 */}
        {/* <a href="/movie">{title}</a> */}

        {/* 이를 해결하기 위해 Link 컴포넌트를 to 속성으로 경로를 설정하면 새로고침이 되지 않고 페이지 전환이 가능함 */}
        {/* Link to="/PATH" */}
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

// PropTypes 패키지를 이용하여 각 props의 타입 지정
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  // arrayOf 메서드로 배열 내부 요소 타입을 지정
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
