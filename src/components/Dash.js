import React from 'react';
import DashStyled from './DashStyled';
// import "@hbsis.uikit/react/dist/uikit.css";

class Dash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DashStyled>
        <div className="menu-dash">

        </div>
      </DashStyled>
    );
  }
}

export default Dash;