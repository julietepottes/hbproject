import React from 'react';
import './Panel.css';
import "@hbsis.uikit/react/dist/uikit.css";
import { Card, CardHeader, CardContent, CardFooter, Button } from '@hbsis.uikit/react';
// import Table from './Table';
// import styled from 'styled-components'

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Header">
        <Card className="panel-card">
          <CardHeader title="Horários"/>
          <CardContent>
            <div>Tabela</div>
          </CardContent>
          <CardFooter>
            <Button type="secondary" width="120px">
              Cancelar
            </Button>
            <Button type="primary" width="120px">
              Salvar
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Panel;