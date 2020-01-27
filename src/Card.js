import React, {Component} from 'react'
 

class Card extends Component {
render(){
    return (
        <div className='bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='this.name' src={`https://robohash.org/${this.props.id}`}></img>
            <div>
    <h2>{this.props.name}</h2>
    <p>{this.props.email}</p>
            </div>
        </div>
    )
}
}

export default Card