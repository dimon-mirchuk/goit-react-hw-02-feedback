import PropTypes from "prop-types";
import Notification from "../Notification";

const FeedbackStat = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

FeedbackStat.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default FeedbackStat;
