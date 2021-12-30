import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { img_500, unavailableLandscape } from "../../config/config";
import Style from "./ContentDialog.module.css";

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

const ContentDialog = (props) => {
  const { open, handleClose, id, media_type } = props;
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  useEffect(() => {
    const fetchContentData = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setContent(data);
      // console.log(data);
    };

    const fetchContentVideo = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setVideo(data.results[0]?.key);
    };

    fetchContentData();
    fetchContentVideo();
  }, []);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">
          {content && (
            <div className={Style.dialog_title}>
              <div>
                <span>{content.name || content.title} </span>
                <span>
                  ({content.first_air_date || content.release_date || "-----"})
                </span>
              </div>
              <div>
                <span
                  className={` ${Style.vote_average} 
                  ${
                    content.vote_average > 7.5
                      ? Style.good_vote_average
                      : Style.just_vote_average
                  }`}
                >
                  {content.vote_average}
                </span>
              </div>
            </div>
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {content && (
              <div>
                <div className={Style.tagline}>
                  {content.tagline && <i>{content.tagline}</i>}
                </div>
                <div>
                  <img
                    className={Style.poster_image}
                    src={
                      content.backdrop_path
                        ? `${img_500}/${content.backdrop_path}`
                        : unavailableLandscape
                    }
                    alt={content.name || content.title}
                  />
                  <div>
                    <span>{content.overview}</span>
                  </div>
                </div>
              </div>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContentDialog;
