import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component{
  render () {
    return (
      <div className='container'>
        <h1 className="headline fw--regular m0">Designer News NYC Meetup</h1>
        <p className="m0"><a href="https://www.google.com/maps?q=houston+hall&es_sm=91&um=1&ie=UTF-8&sa=X&ved=0CAcQ_AUoAWoVChMIjK7At-j3xwIVw9OACh09rA0E">Houston Hall</a> &middot; 7:00 PM Thursday October 8, 2015 (EST) </p>
      </div>
    )
  }
}
