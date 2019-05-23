import React, { Component } from "react";
import Star from "./Star";

class StarRating extends Component {
  state = {
    rating: 0
  };

  renderStars = () => {
    let stars = [];
    let maxRating = 5;

    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <Star
          isSelected={this.state.rating > i}
          setRating={() => this.handleSetRating(i + 1)}
          key={i}
        />
      );
    }
    return stars;
  };

  handleSetRating = rating => {
    this.setState({
      rating
    });
  };

  render() {
    return <ul className="course--stars">{this.renderStars()}</ul>;
  }
}

export default StarRating;
