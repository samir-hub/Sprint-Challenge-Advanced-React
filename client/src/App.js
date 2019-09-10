import React from 'react';
import './App.scss';
import axios from 'axios';
import Navigation from "./components/Navigation";

class App extends React.Component {
  state = {

    players: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      // .then(res => console.log(res.data))
      .then(res => this.setState({players: res.data }))
      .catch(err => console.log('fail'));  
  }

  render() {
    return (
      <>
      <Navigation/>
      <div className="App">
      <h1 data-testid="title" >Player Data:</h1>

        {this.state.players.map(player => (
          <div>
            
          <h2>{player.name}</h2>
          <h3>{player.searches}</h3>
          <h3>{player.country}</h3>
          
          </div>
          ))}

      </div>
      </>
    );
  }
}

export default App;
