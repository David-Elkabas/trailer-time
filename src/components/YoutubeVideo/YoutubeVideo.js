import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

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

  console.log(youtubeURL);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">Youtube video</DialogTitle>
        <DialogContent>
          <DialogContentText> this is the {youtubeURL}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default YoutubeVideo;
