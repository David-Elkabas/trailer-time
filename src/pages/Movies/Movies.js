import axios from "axios";
import { useState, useEffect } from "react";
import PageNumber from "../../components/PageNumber/PageNumber";
import SingleContent from "../../components/SingleContent/SingleContent";
import Style from "./Movies.module.css";

const Movies = () => {
  const [contents, setContents] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setContents(data.results);
    setNumberOfPages(data.total_pages);
    console.log(numberOfPages);
  };
  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div>
      <h1 className="pageHeading">Movies</h1>
      {numberOfPages > 1 && (
        <PageNumber
          setPage={setPage}
          pageNumber={page}
          numberOfPages={numberOfPages}
        />
      )}

      <div className={Style.movies}>
        {contents &&
          contents.map((content) => (
            <SingleContent
              key={content.id}
              id={content.id}
              poster={content.poster_path}
              title={content.title || content.name}
              date={content.first_air_date || content.release_date}
              media_type={"movie"}
              vote_average={content.vote_average}
            />
          ))}
      </div>
      {numberOfPages > 1 && (
        <PageNumber
          setPage={setPage}
          pageNumber={page}
          numberOfPages={numberOfPages}
        />
      )}
    </div>
  );
};

export default Movies;
