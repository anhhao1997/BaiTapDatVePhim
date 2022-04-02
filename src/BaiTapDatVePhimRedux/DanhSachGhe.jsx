import React, { Component } from 'react'
import { connect } from 'react-redux';
class DanhSachGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let disabled = false;
            let gheDangChon = ''
            let indexGheChon = this.props.danhSachGheChon.findIndex(gheChon => gheChon.soGhe === ghe.soGhe)
            if (indexGheChon !== -1) {
                gheDangChon = 'btn-chon'
            }

            if (ghe.gia === 0) {
                return <button disabled className='btn btn-span p-1 m-2' key={index} style={{ fontSize: '35px', width: '45px' }} >
                    {ghe.soGhe}
                </button>
            } else if (ghe.daDat) {
                let disabled = true;
                return <button disabled={disabled} className='btn-danger text-dark p-1 m-2' key={index} style={{ fontSize: '15px', width: '45px' }} >
                    {ghe.soGhe}
                </button>
            }
            return <button className={`${gheDangChon}` + " btn text-dark p-1 m-2"} key={index} style={{ fontSize: '15px', width: '45px' }} onClick={() => { this.props.chonGhe(ghe) }} >
                {ghe.soGhe}
            </button>

        })
    }

    render() {
        return (
            <div className='m-3 center'>
                <div className='row'>
                    <span className='col-2'>
                        {this.props.hangGhe.hang}
                    </span>
                    <span className='col-10'>
                        {this.renderGhe()}
                    </span>
                </div>
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
        chonGhe: (ghe) => {
            const action = {
                type: 'CHON_GHE',
                ghe
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe)