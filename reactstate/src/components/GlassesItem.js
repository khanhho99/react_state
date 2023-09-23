import React, { Component } from 'react'

export default class GlassesItem extends Component {
    render() {
        let { url, name } = this.props.item
        return (
            <div className='col-2 mt-4'>
                <div className='glassItem border' onClick={() => {
                    this.props.changeGlasses(this.props.item)
                }}>
                    <img src={url} alt="" width={120} height={50} />
                    <h6 className='mt-2'>{name}</h6>
                </div>
            </div>
        )
    }
}
