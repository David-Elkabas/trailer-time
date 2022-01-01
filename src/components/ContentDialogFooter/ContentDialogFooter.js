import YouTubeIcon from "@mui/icons-material/YouTube";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import PageviewIcon from "@mui/icons-material/Pageview";
import Style from "./ContentDialogFooter.module.css";

const ContentDialogFooter = (props) => {
  const { openYoutubeVideo, handleClose, openContentHomepage, media_type } =
    props;

  return (
    <div>
      <Button
        autoFocus
        className={Style.buttons}
        variant="contained"
        color="error"
        onClick={openYoutubeVideo}
        startIcon={<YouTubeIcon />}
      >
        Watch trailer
      </Button>
      <Button
        className={Style.buttons}
        variant="contained"
        color="error"
        startIcon={<PageviewIcon />}
        target="_blank"
        href={openContentHomepage}
      >
        {media_type === "tv" ? "Series" : "movie"} homepage
      </Button>
      <Button
        className={Style.buttons}
        color="inherit"
        variant="contained"
        onClick={handleClose}
        endIcon={<CloseIcon />}
      >
        exit
      </Button>
    </div>
  );
};

export default ContentDialogFooter;
