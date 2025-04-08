export default function Loading({ message }) {
  return (
    <div className="loading">
      <div className="loading_spinner">
        <p className="loading_message">{message}</p>
      </div>
    </div>
  );
}
