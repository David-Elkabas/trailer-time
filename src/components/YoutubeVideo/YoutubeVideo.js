import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import YouTube from "react-youtube";

const YoutubeVideo = (props) => {
  const { open, handleClose, youtubeURL } = props;

  const opts = {
    width: "100%",
    host: "https://www.youtube.com",
    height: "400",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <Dialog
        component="span"
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "100%",
            maxHeight: 600,
          },
        }}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title" component="span">
          Youtube video
          {handleClose ? (
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent component="span">
          <DialogContentText component="span">
            <YouTube videoId={youtubeURL} opts={opts} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default YoutubeVideo;
