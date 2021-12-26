import axios from "axios";
import { useState, useEffect } from "react";
import PageNumber from "../../components/PageNumber/PageNumber";
import SingleContent from "../../components/SingleContent/SingleContent";
import Style from "./Trending.module.css";
const Trending = () => {
  const [contents, setContents] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContents(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <h1 className="pageHeading">Trending</h1>
      <PageNumber setPage={setPage} pageNumber={page} numberOfPages={10} />

      <div className={Style.trending}>
        {contents &&
          contents.map((content) => (
            <SingleContent
              key={content.id}
              id={content.id}
              poster={content.poster_path}
              title={content.title || content.name}
              date={content.first_air_date || content.release_date}
              media_type={content.media_type}
              vote_average={content.vote_average}
            />
          ))}
      </div>
      <PageNumber setPage={setPage} pageNumber={page} numberOfPages={10} />
    </div>
  );
};

export default Trending;
