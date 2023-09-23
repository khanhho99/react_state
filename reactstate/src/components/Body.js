import React, { Component } from 'react'
import Model from './Model.js'
import GlassesList from './GlassesList.js'
import '../Css/Body.css'

export default class Body extends Component {
    state = {
        glassesPicked: 0
    }
    changeGlasses = (data) => {
        this.setState({
            glassesPicked: data
        }, () => {
            console.log(this.state.glassesPicked)
        })
    }
    render() {
        return (
            <div className='body__wrappers'>
                <div className='model__section row p-5 justify-content-between'>
                    <Model
                        isModel={true}
                    />
                    <Model
                        isModel={true}
                        glassesPicked={this.state.glassesPicked}
                    />
                </div>
                <div className="glassesList p-4 bg-white rounded">
                    <GlassesList
                        changeGlasses={this.changeGlasses}
                    />
                </div>
            </div>
        )
    }
}
