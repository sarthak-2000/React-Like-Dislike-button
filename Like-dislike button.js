import React from "react";

export default class LikeDislike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 100,
      dislikes: 25,
      activeLike: false,
      activeDislike: false
    };
  }

  setLikeState() {
    this.setState({
      likes: !this.state.activeLike
        ? this.state.likes + 1
        : this.state.likes - 1,
      activeLike: !this.state.activeLike
    });
  }

  setDislikeState() {
    this.setState({
      dislikes: !this.state.activeDislike
        ? this.state.dislikes + 1
        : this.state.dislikes - 1,
      activeDislike: !this.state.activeDislike
    });
  }

  handleLikeClick() {
    if (this.state.activeDislike) {
      this.setLikeState();
      this.setDislikeState();
    }
    this.setLikeState();
  }

  handleDislikeClick() {
    if (this.state.activeLike) {
      this.setDislikeState();
      this.setLikeState();
    }
    this.setDislikeState();
  }

  render() {
    const likes = this.state.likes;
    const activeLike = this.state.activeLike;
    const dislikes = this.state.dislikes;
    const activeDislike = this.state.activeDislike;

    return (
      <>
        <div>
          <button
            onClick={() => this.handleLikeClick()}
            className={`like-button ${activeLike ? "liked" : ""}`}
          >
            <span>{`${activeLike ? "Liked" : "Like"}`} | </span>
            <span className="likes-counter">{likes}</span>
          </button>
          <button
            onClick={() => this.handleDislikeClick()}
            className={`dislike-button ${activeDislike ? "disliked" : ""}`}
          >
            <span>{`${activeDislike ? "Disliked" : "Dislike"}`} | </span>
            <span className="dislikes-counter">{dislikes}</span>
          </button>
        </div>

        <style>{`
        
          .like-button, .dislike-button {
            font-size: 1rem;
            padding: 5px 10px;
            color: #585858;
          }

          .liked, .disliked {
            font-weight: bold;
            color: #1565c0;
          }

        `}</style>
      </>
    );
  }
}
