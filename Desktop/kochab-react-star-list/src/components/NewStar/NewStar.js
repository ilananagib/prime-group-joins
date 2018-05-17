
import React, { Component } from 'react';

class NewStar extends Component {
render() {
 
  return (
      <p> New star is {this.props.currentStar.name} and has a diameter of {this.props.currentStar.diameter}</p>
  );
}
}

export default NewStar;
