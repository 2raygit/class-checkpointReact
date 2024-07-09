import imageProfile from './assets/img.jpeg'
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "cheikhou touré",
        bio: "passioné de developpement d'application ",
        imgSrc: imageProfile,
        profession: "developper frontend"
      },
      show: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? "cacher " : "afficher Profile"}
        </button>

        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}

        <p>Time since component mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
