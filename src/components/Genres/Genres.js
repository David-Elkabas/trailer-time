import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Genres = (props) => {
  const { type, setPage, genres, setGenres } = props;

  const clickOnGenresArray = (genre) => {
    setGenres({
      selectedGenres: [...genres.selectedGenres, genre],
      genresArray: genres.genresArray.filter((g) => g.id !== genre.id),
    });
    setPage(1);
  };
  const clickOnSelectedGenres = (genre) => {
    setGenres({
      genresArray: [genre, ...genres.genresArray],
      selectedGenres: genres.selectedGenres.filter((g) => g.id !== genre.id),
    });
    setPage(1);
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setGenres({
        genresArray: data.genres,
        selectedGenres: [],
      });
    };
    fetchGenres();
    return () => {
      setGenres({
        genresArray: [],
        selectedGenres: [],
      });
    };
  }, [type, setGenres]);

  return (
    <div style={{ padding: "5px" }}>
      {genres.selectedGenres &&
        genres.selectedGenres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            color="primary"
            sx={{ margin: "3px" }}
            clickable
            onClick={() => clickOnSelectedGenres(genre)}
            onDelete={() => clickOnSelectedGenres(genre)}
          />
        ))}
      {genres.genresArray &&
        genres.genresArray.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            sx={{ background: "#f29200", margin: "3px" }}
            clickable
            onClick={() => clickOnGenresArray(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
