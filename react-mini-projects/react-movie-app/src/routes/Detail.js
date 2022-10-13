// useParams는 react-router-dom으로 부터 import를 해야함.
// useParams는 Route에서 사용되는 동적 url의 변수(여기선 id를 가리킴)를 모두 받을 수 있는 Hook.
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  // Detail 컴포넌트의 url에 사용된 id가 할당됨
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <h1>Detail</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <MovieDetail
          coverImg={movie.medium_cover_image}
          title={movie.title}
          rating={movie.rating}
          like={movie.like_count}
          description={movie.description_full}
        />
      )}
    </>
  );
}

export default Detail;
