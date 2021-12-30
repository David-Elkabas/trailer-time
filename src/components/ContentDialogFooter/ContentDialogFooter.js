import YouTubeIcon from "@mui/icons-material/YouTube";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Style from "./ContentDialogFooter.module.css";

const ContentDialogFooter = (props) => {
  const { openYoutubeVideo, handleClose } = props;

  return (
    <div className={Style.buttons}>
      <Button
        autoFocus
        className={Style.youtube_button}
        variant="contained"
        color="error"
        onClick={openYoutubeVideo}
        startIcon={<YouTubeIcon />}
      >
        Watch trailer
      </Button>
      <Button
        className={Style.exit_button}
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
