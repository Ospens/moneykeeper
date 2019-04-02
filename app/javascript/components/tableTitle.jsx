import React, { Component } from 'react'
import './tableTitle.scss'

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i + 1;
    products.push({
      date: id,
      account1: [{
        sum: 100,
        category: 1,
        description: '123'
      },
      {
        sum: 110,
        category: 2,
        description: '22'
      },
      ],
      price: 2100 + i
    });
  }
}

addProducts(5);


export default class TableTitle extends Component {

  componentWillMount() {
    this.props.fetchTableData()
  }

  render() {
    console.log(products)
    console.log(products.map(id => id.account1).map(a => a.map(el => el.sum)))
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th rowSpan="2">Август</th>
            <th>Наличные</th>
            <th>Всего</th>
            <th>Необходимое</th>
            <th>Вклад</th>
          </tr>
          <tr>
            <th>{products.map(id => id.account1).reduce((a, b) => a + b, 0)}</th>
            <th>sum</th>
            <th>sum</th>
            <th>sum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    )
  }
}