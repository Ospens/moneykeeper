import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import EditModal from './editModal'

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i + 1;
    products.push({
      date: id,
      account1: [[100, 1, '123'], [220, 2, '003']],
      price: 2100 + i
    });
  }
}

addProducts(31);


export default class TableTitle extends Component {

  componentWillMount() {
    this.props.fetchTableData()
  }

  render() {

    const cellEditProp = {
      mode: 'click'
    }

    const createEditModal = (onUpdate, props) => (<EditModal onUpdate={onUpdate} {...props} />)

    return (
      <BootstrapTable data={products} cellEdit={cellEditProp}>
        <TableHeaderColumn dataField='date' isKey={true} row='0' rowSpan='2' >Август</TableHeaderColumn>
        
        <TableHeaderColumn dataField='account1' row='0'>Наличные</TableHeaderColumn>
        <TableHeaderColumn
          dataField='account1'
          row='1'
          customEditor={{ getElement: createEditModal }}
        >
          {products.map(id => id.account1).reduce((a, b) => a + b, 0)}
        </TableHeaderColumn>
        
        <TableHeaderColumn dataField='total' row='0'>Всего</TableHeaderColumn>
        <TableHeaderColumn dataField='total' row='1'>sum</TableHeaderColumn>
        
        <TableHeaderColumn dataField='category1' row='0'>Необходимое</TableHeaderColumn>
        <TableHeaderColumn row='1'>sum</TableHeaderColumn>
        
        <TableHeaderColumn dataField='deposit1' row='0'>Вклад 1</TableHeaderColumn>
        <TableHeaderColumn row='1'>sum</TableHeaderColumn>

      </BootstrapTable>
    )
  }
}