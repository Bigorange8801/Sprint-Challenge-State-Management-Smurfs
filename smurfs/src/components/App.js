import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">SMURFS! </h1>
          <SmurfForm />
        </header>
        {this.props.error ? <h3>Error Fetching Smurfs</h3> : null}
        <div className="Flex-Container">
          {this.props.gettingSmurfs ? (
            <h3>Loading Smurfs...</h3>
          ) : (
            <Smurfs smurfs={this.props.smurfs} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    error: state.error,
    gettingSmurfs: state.gettingSmurfs
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
