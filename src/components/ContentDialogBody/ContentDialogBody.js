import { img_500, unavailableLandscape } from "../../config/config";
import Styles from "./ContentDialogBody.module.css";

const ContentDialogBody = (props) => {
  const { tagline, poster, contentName, description } = props;
  return (
    <div>
      <div className={Styles.tagline}>{tagline && <i>{tagline}</i>}</div>
      <div>
        <img
          className={Styles.poster_image}
          src={poster ? `${img_500}/${poster}` : unavailableLandscape}
          alt={contentName}
        />
        <div className={Styles.description}>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default ContentDialogBody;
