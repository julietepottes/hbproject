import React from 'react';
import './Header.css';
import { Button } from '@hbsis.uikit/react';
import HeaderStyled from "./HeaderStyled";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HeaderStyled>
        <div className="myHeader">
          <Button width="200px" type="primary">
            Botão
        </Button>
        </div>
      </HeaderStyled>
    );
  }
}

export default Header;