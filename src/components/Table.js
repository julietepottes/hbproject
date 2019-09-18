import * as React from 'react';
import { boolean, color, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { Table, TableHeader, TableRow, TableCol } from '@hbsis.uikit/react';



class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Header">
                <Table
                    shadowColor="#afcef3"
                    shadowHoverColor="#2870b2"
                    borderColor="#c5d0e1"
                    firstStripColor="#e5edf4"
                    secondStripColor="#f4f5f8"
                    backgroundHoverColor="#f4f5f8"
                >
                    <TableHeader>
                        <TableCol xs={4}>
                            Header 1
                        </TableCol>
                        <TableCol xs={4}>
                            Header 2
                        </TableCol>
                        <TableCol xs={4}>
                            Header 3
                        </TableCol>
                    </TableHeader>
                    <TableRow>
                        <TableCol xs={4}>
                            Linha 1 Coluna 1
                        </TableCol>
                        <TableCol xs={4}>
                            Linha 1 Coluna 2
                        </TableCol>
                        <TableCol xs={4}>
                            Linha 1 Coluna 3
                        </TableCol>
                    </TableRow>
                    <TableRow>
                        <TableCol xs={4}>
                            Linha 2 Coluna 1
                        </TableCol>
                        <TableCol xs={4}>
                            Linha 2 Coluna 2
                        </TableCol>
                        <TableCol xs={4}>
                            Linha 2 Coluna 3
                        </TableCol>
                    </TableRow>
                    <TableRow>
                        <TableCol xs={4}>
                            Linha 3 Coluna 1
                        </TableCol>
                        <TableCol xs={4}>
                            Linha 3 Coluna 2
                        </TableCol>
                        <TableCol xs={4}>
                            Linha 3 Coluna 3
                        </TableCol>
                    </TableRow>
                </Table>
            </div>
        );
    }
}

export default Table;