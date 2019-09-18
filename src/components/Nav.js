import React from 'react';
import './Nav.css';


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="myNav">
        <p>Oi turu bom?</p>
      </div>
    );
  }
}

export default Nav;