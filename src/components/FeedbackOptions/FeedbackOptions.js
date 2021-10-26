import PropTypes from "prop-types";
import FeedbackBtns from "../FeedbackBtns";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.buttonList}>
      {options.map((option) =>
        FeedbackBtns({ feedback: option, onLeaveFeedback })
      )}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
