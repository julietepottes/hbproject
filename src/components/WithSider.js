import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Layout, Header, Sider } from 'components';
import { Menu } from '../Menu';
import MenuList from './MenuList';

const stories = storiesOf('Menu', module);

stories.add('Basic Usage', () => {
  class WithSider extends Component {
    state = {
      siderOpen: true,
      pathLabel: 'Menu',
    };

    toggleSider = () => {
      const { siderOpen } = this.state;
      this.setState({ siderOpen: !siderOpen });
    };

    hideSider = () => {
      this.setState({ siderOpen: false });
    };

    onSelectMenu = ({ label }) => {
      action('onSelectMenu')(label);
      this.setState({ pathLabel: label });
    };

    render() {
      const { siderOpen, pathLabel } = this.state;
      const menu = MenuList;
      return (
        <Layout>
          <Sider visible={siderOpen} triggerClose={this.hideSider}>
            <Menu items={menu} onChoose={this.onSelectMenu} />
          </Sider>
          <Layout>
            <Header>
              <Sider.Toggle active={siderOpen} onToggle={this.toggleSider} />
              {pathLabel}
            </Header>
          </Layout>
        </Layout>
      );
    }
  }
  return <WithSider />;
});

export default stories;