import { useState, useEffect } from "react";
import Genres from "../../components/Genres/Genres";
import PageNumber from "../../components/PageNumber/PageNumber";
import SingleContent from "../../components/SingleContent/SingleContent";
import Styles from "./PageComponent.module.css";
import axios from "axios";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f29200",
    },

    text: {
      primary: "#f29200",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
  },
});

const PageComponent = (props) => {
  const { pageName, pageTitle } = props;

  const [contents, setContents] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState({
    genresArray: [],
    selectedGenres: [],
  });
  const [searchText, setSearchText] = useState("");
  // const [lastSearchText, setLastSearchText] = useState("");
  const [openSearch, setOpenSearch] = useState("true");
  const [openGenres, setOpenGenres] = useState("true");

  const searchContent = (value) => {
    setSearchText(value);
    setPage(1);
  };

  useEffect(() => {
    const getGenreForURL = () => {
      // rearrange array of all the selected it into  string
      // example: [3,7,12,4] ==> "3,7,12,4"
      if (genres.selectedGenres.length < 1) return "";

      const GenreIds = genres.selectedGenres.map((g) => g.id);
      return GenreIds.reduce(
        (accumulator, currentId) => accumulator + "," + currentId
      );
    };
    const fetchPageData = async (genresForURL) => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/${pageName}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForURL}`
      );
      setContents(data.results);
      setNumberOfPages(data.total_pages);
    };
    const fetchSearch = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/${pageName}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_video=false&page=${page}&query=${searchText}&include_adult=false`
        );
        setContents(data.results);
        setNumberOfPages(data.total_pages);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    const genresForURL = getGenreForURL();
    if (searchText.length !== 0) {
      setOpenSearch(true);
      setOpenGenres(false);
      fetchSearch();
    } else if (genres.selectedGenres.length !== 0) {
      fetchPageData(genresForURL);
      setOpenGenres(true);
      setOpenSearch(false);
    } else {
      fetchPageData(genresForURL);
      setOpenSearch(true);
      setOpenGenres(true);
      // setPage(1);
    }
  }, [page, genres.selectedGenres, pageName, searchText]);

  return (
    <div>
      <h1 className="pageHeading">{pageTitle}</h1>
      <ThemeProvider theme={theme}>
        {openSearch && (
          <div className={Styles.textField}>
            <TextField
              id="outlined-basic"
              color="primary"
              label="Search"
              variant="outlined"
              sx={{ color: "text.primary" }}
              focused
              onChange={(e) => searchContent(e.target.value)}
            />
          </div>
        )}
      </ThemeProvider>
      {openGenres && (
        <div className={Styles.genres}>
          <Genres
            type={pageName}
            setPage={setPage}
            genres={genres}
            setGenres={setGenres}
          />
        </div>
      )}
      {numberOfPages > 1 && (
        <PageNumber
          setPage={setPage}
          pageNumber={page}
          numberOfPages={numberOfPages}
        />
      )}

      <div className={Styles.content}>
        {contents &&
          contents.map((content) => (
            <SingleContent
              key={content.id}
              id={content.id}
              poster={content.poster_path}
              title={content.title || content.name}
              date={content.first_air_date || content.release_date}
              media_type={pageName}
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

export default PageComponent;
