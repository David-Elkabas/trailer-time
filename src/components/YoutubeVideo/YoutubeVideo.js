import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import YouTube from "react-youtube";
import Styles from "./YoutubeVideo.module.css";
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const YoutubeVideo = (props) => {
  const { open, handleClose, youtubeURL } = props;

  const opts = {
    width: "100%",
    height: "400",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <Dialog
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
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">Youtube video</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <YouTube videoId={youtubeURL} opts={opts} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default YoutubeVideo;
