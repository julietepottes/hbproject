import React from 'react';
import './Header.css';
import { boolean, text, number, select, color } from '@hbsis.uikit/react';
import { storiesOf } from '@hbsis.uikit/react';
import * as Icons from '@hbsis.uikit/react';
import { Icon } from '@hbsis.uikit/react';
import { TabPane, Tabs } from '@hbsis.uikit/react';
import { action } from '@hbsis.uikit/react';

const GRP_TAB1 = 'TAB 1';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="myHeader">
       <Tabs>
            <TabPane label="DADOS CADASRAIS">
            Tab Content 1
            </TabPane>
            <TabPane label="METAS DA UNIDADE">
            Tab Content 2
            </TabPane>
            <TabPane label="RESTRIÇÕES E FUNCIONAMENTO">
            Tab Content 3
            </TabPane>
      </Tabs>
      </div>
  )};
    };


export default Header;