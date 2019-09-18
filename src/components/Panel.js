import React from 'react';
import './Dash.css';
import "@hbsis.uikit/react/dist/uikit.css";
import { Card, CardHeader, CardContent, CardFooter, Button, Badge } from '@hbsis.uikit/react';
// import Table from './Table';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Header">
        <Card>
          <CardHeader title="Horários" custom={<Badge />} />
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