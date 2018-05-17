import React, { Component } from 'react';


class NewStarForm extends Component {
render() {
    return (
        <form onSubmit={this.props.handleSubmitForChild} >
            <input value={this.props.newStar.name} onChange={this.props.handleChangeForChild('name')} placeholder='Name' />
            <input value={this.props.newStar.diameter} onChange={this.props.handleChangeForChild('diameter')} placeholder='Diameter' />
            <input type="submit" value='Add new star' />
        </form>
    );
}
}

export default NewStarForm;