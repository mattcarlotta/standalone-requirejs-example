class H1LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isLiked: !prevState.isLiked }));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLiked && <p>This is liked.</p>}
        <h1 onClick={this.handleClick}>
          {!this.state.isLiked ? "Like" : "Dislike"}
        </h1>
      </React.Fragment>
    );
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isLiked: !prevState.isLiked }));
  }

  render() {
    return (
      <div>
        {this.state.isLiked && <p>This is liked.</p>}
        <button onClick={this.handleClick}>
          {!this.state.isLiked ? "Like" : "Dislike"}
        </button>
        <br />
        <H1LikeButton />
      </div>
    );
  }
}

ReactDOM.render(<LikeButton />, document.querySelector("#root"));
