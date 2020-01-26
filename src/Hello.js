import React  from 'react';
import './Hello.css'

const Hello = (props) =>  {
   
return (
    <div className='f1 tc lh-title'>
    <p>{props.greeting}</p>
        <h1>Hello World</h1>
    </div>
)
    
}

export default Hello