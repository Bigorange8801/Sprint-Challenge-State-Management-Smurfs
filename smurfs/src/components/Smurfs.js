import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getData } from '../actions/index'


class Smurfs extends Component {
  
  render() {
    return (
      <div className="Smurf-Container">
        <ul className="Smurf-List">
          {this.props.smurfs.map(smurf => {
            return (
              <p key={smurf.id}>
                Name: {smurf.name} <br/>
                Age: {smurf.age} <br/>
                Height: {smurf.height}
              </p>
            );
          })}
        </ul>
      </div>
    );
  }
}



export default Smurfs;