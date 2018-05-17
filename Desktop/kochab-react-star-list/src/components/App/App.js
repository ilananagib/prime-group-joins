import React, { Component } from 'react';
import Introduction from '../Introduction/Introduction';
import NewStar from '../NewStar/NewStar';
import StarList from '../StarList/StarList';
import NewStarForm from '../NewStarForm/NewStarForm';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starList: [
        { name: 'Gacrux', diameter: 117 },
        { name: 'Kochab', diameter: 13 },
        { name: 'Menkar', diameter: 2 },
      ],
      newStar: {
        name: '',
        diameter: '',
      }
    };
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value,
      }
    })

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
  starList: [...this.state.starList, this.state.newStar],
  newStar: {
    name: '',
    diameter: '',
  }
});
  }
// let starListItemArray = [];
// for (let i = 0; i < this.state.starList.length; i++) {
//   let starName = this.state.starList[i];
//   starListItemArray.push(<li key={starName}>{starName}</li>);
// }
// onSubmit = (event) => {
//   event.preventDefault();

// }
render() {
  // const starListItemArray = this.state.starList.map(star => (<li key={star}>{star}</li>));
  return (
    <div>
      < Introduction />
      < NewStar currentStar={this.state.newStar} />
      <p> New star is {this.state.newStar.name} and has a diameter of {this.state.newStar.diameter}</p>
      
      <NewStarForm  newStar={this.state.newStar} handleChangeForChild={this.handleChangeFor} handleSubmitForChild={this.handleSubmit}/>
      {/* <form >
        <input value={this.state.newStar.name} onChange={this.handleChangeFor('name')} placeholder='Name' />
        <input value={this.state.newStar.diameter} onChange={this.handleChangeFor('diameter')} placeholder='Diameter' />
        <input type="Submit" value='Add new star' />
      </form> */}
      < StarList starList={this.state.starList} />
      {/* <ul>
        {this.state.starList.map(star => (<li key={star.name}>
          The star {star.name} is {star.diameter} million km in diameters</li>))}
      </ul> */}
    </div>
  );
}
}

export default App;
