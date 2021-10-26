import styles from "./FeedbackBtns.module.css";

const FeedbackBtns = ({ feedback, onLeaveFeedback }) => {
  return (
    <li key={feedback}>
      <button
        type="button"
        className={styles.button}
        data-feedback={feedback}
        onClick={onLeaveFeedback}
      >
        {feedback}
      </button>
    </li>
  );
};

export default FeedbackBtns;
