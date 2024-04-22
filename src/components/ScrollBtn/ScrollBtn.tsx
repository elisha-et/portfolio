import { scroller } from "react-scroll";
import { Button } from "@mui/material";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    scroller.scrollTo('nav', {
      duration: 1000,
      smooth: true,
    });
  };

  return (
    <Button
      variant="contained"
      style={{
        position: "fixed",
        bottom: "10px",
        right: "5px",
        backgroundColor: "#020817",
        zIndex: 1000,
        border: "white 1px solid",
        fontSize: "12px"
      }}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-up-long"></i>
    </Button>
  );
};

export default ScrollToTopButton;