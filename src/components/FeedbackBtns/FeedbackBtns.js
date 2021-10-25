const FeedbackBtns = ({ feedback, onLeaveFeedback }) => {
  return (
    <li key={feedback}>
      <button type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
        {feedback}
      </button>
    </li>
  );
};

export default FeedbackBtns;
