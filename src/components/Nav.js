import React from 'react';
import './Nav.css';
import NavStyled from './NavStyled'


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavStyled>
        <div className="myNav">
          <p>Oi turu bom?</p>
        </div>
      </NavStyled>
    );
  }
}

export default Nav;