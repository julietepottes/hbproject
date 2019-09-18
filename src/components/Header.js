import React from 'react';
import './Header.css';
import { Button } from '@hbsis.uikit/react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="myHeader">
        <Button width="200px" type="primary">
          Botão
        </Button>
      </div>
    );
  }
}

export default Header;