import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header.component";
import Index from "./components/index.component";
import ProdSearch from "./components/prod-search.component";
import FlexSearch from "./components/flex-search.component";
import DCInventorySearch from "./components/dc-inventory-search.component";
import PCode from "./components/p-code.component";
import ListItem from "./components/list-item.component";

const navLinks = [
  {title: "Gearbox", href: "/", iconType: "home", id: 1},
  {title: "Product Search Generator", href: "/prod-search", iconType: "layers", id: 2},
  {title: "Flex Search Generator", href: "/flex-search", iconType: "layers", id: 3},
  {title: "DC Inventory Search Generator", href: "/dc-inventory-search", iconType: "layers", id: 4},
  {title: "P Code Generator", href: "/p-code", iconType: "layers", id: 5}
];

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header title="Site Operations Gearbox" />
          <div className="container-fluid">
            <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
              {navLinks.map( navLink =>
                <ListItem 
                title={ navLink.title }
                href={ navLink.href }
                type={ navLink.iconType }
                key={ navLink.id.toString() }
                ></ListItem>
              )}
              </ul>
            </div>
            </nav>
            <Route path="/" exact component={Index} />
            <Route path="/prod-search" exact component={ProdSearch} />
            <Route path="/flex-search" exact component={FlexSearch} />
            <Route path="/dc-inventory-search" exact component={DCInventorySearch} />
            <Route path="/p-code" exact component={PCode} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
