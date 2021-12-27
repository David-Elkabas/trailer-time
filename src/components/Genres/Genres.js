import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Genres = (props) => {
  const { type, setPage, genres, setGenres } = props;

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres({
      genresArray: data.genres,
      selectedGenres: [],
    });
  };
  console.log(genres);
  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({
        genresArray: [],
        selectedGenres: [],
      });
    };
  }, []);

  return (
    <div>
      <Chip />
    </div>
  );
};

export default Genres;
