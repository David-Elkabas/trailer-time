import Pagination from "@mui/material/Pagination";
import Styles from "./pageNumber.module.css";

const PageNumber = (props) => {
  const { setPage, pageNumber, numberOfPages } = props;
  const changePage = (event, value) => {
    window.scroll(0, 0);
    setPage(value);
  };
  return (
    <div className={Styles.pageNumber}>
      <Pagination
        page={pageNumber}
        count={numberOfPages}
        color="primary"
        sx={{ background: "white", borderRadius: "50px" }}
        onChange={changePage}
      />
    </div>
  );
};

export default PageNumber;
