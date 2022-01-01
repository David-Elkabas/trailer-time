import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect } from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import Styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: green,
    secondary: green,
  },
});

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
  }, [value, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <div className={Styles.navbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { backgroundColor: "goldenrod" },
          }}
          textColor="inherit"
        >
          <Tab icon={<WhatshotIcon />} label="Trending" />
          <Tab icon={<MovieIcon />} label="Movies" />
          <Tab icon={<TvIcon />} label="TV series" />
        </Tabs>
      </div>
    </ThemeProvider>
  );
}
