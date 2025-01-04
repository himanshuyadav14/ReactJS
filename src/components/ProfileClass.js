import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    //create state
    this.state = {
      count: 0,
      count1:1,
    };

    console.log("Constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    return (
      <div>
        <h1>This is profile class component</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>XYZ: {this.props.xyz}</h2>
        <h2>state: {this.state.count}</h2>
      </div>
    );
  }
}

export default Profile;
