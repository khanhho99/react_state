import React, { Component } from 'react'
import { glassesList } from './data.js'
import GlassesItem from './GlassesItem.js'
export default class GlassesList extends Component {
    render() {
        return (
            <div className='row'>
                {glassesList.map(glasses => {
                    return <GlassesItem
                        item={glasses}
                        changeGlasses={this.props.changeGlasses}
                    />
                })}
            </div>
        )
    }
}
