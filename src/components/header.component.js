import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <span className="navbar-brand col-sm-3 col-md-2 mr-0">{ this.props.title }</span>
        </nav>
    );
  }
}