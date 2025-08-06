import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: 'Fatima Zahra',
        bio: 'I love coding and learning new things.',
        imgSrc: 'https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=',
        profession: 'Web Developer'
      },
      shows: false,
      mountedTime: 0
    };
    this.intervalId = null;
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { Person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>My First Class Component</h1>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Person' : 'Show Person'}
        </button>

        {shows && (
          <div className="profile">
            <img src={Person.imgSrc} alt="Profile" />
            <h2>{Person.fullName}</h2>
            <p>{Person.bio}</p>
            <p><strong>{Person.profession}</strong></p>
          </div>
        )}

        <p>App has been open for {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
