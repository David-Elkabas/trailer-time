import axios from "axios";
import { useState, useEffect } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import Style from "./Trending.module.css";
const Trending = () => {
  const [contents, setContents] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setContents(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <h1>Trending</h1>
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
    </div>
  );
};

export default Trending;
