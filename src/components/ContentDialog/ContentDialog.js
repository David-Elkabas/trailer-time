import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import ContentDialogBody from "../ContentDialogBody/ContentDialogBody";
import ContentDialogFooter from "../ContentDialogFooter/ContentDialogFooter";
import DialogTitleComp from "../ContentDialogTitle/ContentDialogTitle";
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
  const { open, handleClose, id, media_type, openYoutubeVideo } = props;
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
            <DialogTitleComp
              contentName={content.name || content.title}
              date={content.first_air_date || content.release_date || "-----"}
              vote_average={content.vote_average}
            />
          )}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {content && (
              <ContentDialogBody
                tagline={content.tagline || "no tagline was given"}
                poster={content.backdrop_path}
                contentName={content.name || content.title}
                description={content.overview || "no description was given"}
              />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ContentDialogFooter
            openYoutubeVideo={openYoutubeVideo}
            handleClose={handleClose}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContentDialog;
