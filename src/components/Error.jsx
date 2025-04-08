export default function Error({ message, onRetry }) {
  return (
    <div className="error">
      <p className="error_message">{message}</p>
      <button className="button_retry" onClick={onRetry}>
        다시 시도
      </button>
    </div>
  );
}
