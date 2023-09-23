import React, { Component } from 'react'
import '../Css/Model.css'

export default class Model extends Component {
    render() {
        let glassesPicked = 1
        let pickedName = ''
        let pickedDesc = ''
        if (this.props.glassesPicked) {
            let { id, name, desc } = this.props.glassesPicked
            glassesPicked = id;
            pickedName = name;
            pickedDesc = desc;
        }
        let imgGlassesPath = `./resources/glassesImage/v${glassesPicked}.png`
        return (
            <div className='col-5'>
                <div className="model__wrapper">
                    <div className="model__img">
                        <img src="./resources/glassesImage/model.jpg" alt="" className='img-fluid' height={300} />
                        {this.props.isModel && <img src={imgGlassesPath} alt="" className='model__glass' height={300} />}
                    </div>
                    <div>
                        {this.props.isModel && <div className="model__desc" >
                            <h3 className='text-primary'>{pickedName || 'Name'}</h3>
                            <p className='text-white'>{pickedDesc || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, voluptatibus.'}
                            </p>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}
