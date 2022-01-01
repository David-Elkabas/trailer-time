import Styles from "./ContentDialogTitle.module.css";
const DialogTitleComp = (props) => {
  const { contentName, date, vote_average } = props;
  return (
    <div>
      <div className={Styles.dialog_title}>
        <div>
          <span>{contentName} </span>
          <span>({date})</span>
        </div>
        <div>
          <span
            className={` ${Styles.vote_average} 
                  ${
                    vote_average > 7.5
                      ? Styles.good_vote_average
                      : Styles.just_vote_average
                  }`}
          >
            {vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DialogTitleComp;
