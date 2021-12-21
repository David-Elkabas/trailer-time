import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import Styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

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
    else if (value === 3) navigate("/search");
  }, [value, navigate]);

  return (
    <div className={Styles.navbar}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab icon={<WhatshotIcon />} label="Trending" />
        <Tab icon={<MovieIcon />} label="Movies" />
        <Tab icon={<TvIcon />} label="TV series" />
        <Tab icon={<SearchIcon />} label="Search" />
      </Tabs>
    </div>
  );
}
// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

// export default function IconBreadcrumbs() {
//   return (
//     <div role="presentation" onClick={handleClick} className={Styles.navbar}>
//       <Breadcrumbs aria-label="breadcrumb">
//         <Link
//           underline="hover"
//           sx={{ display: "flex", alignItems: "center" }}
//           color="inherit"
//           to="/"
//         >
//           <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//           Trending
//         </Link>
//         <Link
//           underline="hover"
//           sx={{ display: "flex", alignItems: "center" }}
//           color="inherit"
//           href="#movies"
//         >
//           <MovieIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//           Movies
//         </Link>
//         <Link
//           underline="hover"
//           sx={{ display: "flex", alignItems: "center" }}
//           color="inherit"
//           to="/series"
//         >
//           <TvIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//           TV series
//         </Link>
//         <Link
//           underline="hover"
//           sx={{ display: "flex", alignItems: "center" }}
//           color="inherit"
//           to="/search"
//         >
//           <SearchIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//           Search
//         </Link>
//       </Breadcrumbs>
//     </div>
//   );
// }
