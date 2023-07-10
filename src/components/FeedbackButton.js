import commentImage from "../resources/comment.svg";

export default function FeedBackButton() {
  return (
    <div>
      <a
        className="comment-btn"
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/muisictheory/"
      >
        <button
          className="btn"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
          type="button"
        >
          Comment
        </button>
      </a>
      {/*<a
       target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/muisictheory/"
      >
        <div className="comment-image-container">
          <img
            className="comment-image"
            src={commentImage}
            alt="click to comment"
          />
        </div>
      </a>*/}
    </div>
  );
}
