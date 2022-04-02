import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableKhachHang extends Component {
  render() {
    return (
      <div className='m-5'>
        <table className='table'>
          <thead>
            <tr>
              <th>Chổ đã đặt</th>
              <th>Gía</th>
              <th>Hủy ghế</th>
            </tr>
          </thead>
          <tbody>
            {this.props.danhSachGheChon.map((gheChon, index) => {
              return <tr key={index}>
                <td>{gheChon.soGhe}</td>
                <td>{gheChon.gia}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => { this.props.huyGhe(gheChon.soGhe) }}>
                    Hủy
                  </button>
                </td>
              </tr>
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Tổng tiền</td>
              <td>{this.props.danhSachGheChon.reduce((tt, ghe, index) => {
                return tt += ghe.gia
              }, 0)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}


const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheChon: rootReducer.DatVePhimReducer.danhSachGheChon
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    huyGhe: (soGhe) => {
      const action = {
        type: 'HUY_GHE',
        soGhe
      }
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TableKhachHang)