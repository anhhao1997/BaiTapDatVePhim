import React, { Component } from 'react'
import '../BaiTapDatVePhimRedux/DatVePhimRedux.css'
import DanhSachGhe from './DanhSachGhe'
import TableKhachHang from './TableKhachHang'
import { connect } from 'react-redux'
class DatVePhimRedux extends Component {



    renderDanhSachGhe = () => {
        return this.props.mangGhe.map((hangGhe, index) => {
            return (
                <div key={index} className='text-danger'>
                    <DanhSachGhe hangGhe={hangGhe} index={index} />
                </div>
            )
        })
    }

    render() {

        return (
            <div className='container-fluid text-center bgMovie'>
                <div className='title p-4 text-white'>MOVIE SEAT SELECTION</div>
                <div className='bgForm'>
                    <div className='infoForm'>
                        {this.renderDanhSachGhe()}
                        <TableKhachHang />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangGhe: rootReducer.DatVePhimReducer.mangGhe
    }
}




export default connect(mapStateToProps)(DatVePhimRedux)