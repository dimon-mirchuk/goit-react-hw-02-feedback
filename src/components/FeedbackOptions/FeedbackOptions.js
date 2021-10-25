import PropTypes from "prop-types";
import FeedbackBtns from "../FeedbackBtns";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
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
