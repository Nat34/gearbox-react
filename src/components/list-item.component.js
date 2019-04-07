import React, { Component } from 'react';
import { Link } from "react-router-dom";

import SvgIcon from "./svg-icon.component";

export default class ListItem extends Component {
    render () {
        return (
            <li className="nav-item">
                <Link to={ this.props.href } className="nav-link">
                <SvgIcon type={ this.props.type }/>{ this.props.title }
                </Link>
          </li>
        )
    }
}