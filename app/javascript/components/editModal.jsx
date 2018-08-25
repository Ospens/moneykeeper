import React, { Component } from 'react'

export default class EditModal extends Component {
  constructor(props) {
    super(props)
    this.updateData = this.updateData.bind(this)
    this.state = {
      name: props.defaultValue,
      open: true
    }
  }

  updateData() {
    this.props.onUpdate(this.state.name)
  }
  close = () => {
    this.setState({ open: false })
    this.props.onUpdate(this.props.defaultValue)
  }
  render() {
    const display = this.state.open ? 'block' : 'none'
    return (
      <div className="modal_container" style={{ display }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            </div>
            <div className="modal-body">
              <button type="button" className="close">
                <span aria-hidden="true">×</span>
              </button>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">$</span>
                  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                </div>
              </div>

              <div className="form-group">
                <select className="form-control">
                  <option>Выбор счета</option>
                </select>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">Описание</span>
                  <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                </div>
              </div>
              <button type="button" className="btn btn-info">Добавить операцию</button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.close}>Close</button>
              <button type="button" className="btn btn-primary" onClick={this.updateData}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
