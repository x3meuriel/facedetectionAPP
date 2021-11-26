import React from 'react';
import './ImageLinkForm.css';


export const ImageLinkForm = (props) =>{
    
    return (
        
        <div>
            <p className='f3'>
                {'this magic brain will detect faces in your pictures... Give it a try!!!'}
            </p>
            <div className= 'center'>
                <div className = 'form center pa4 br3 shadow-5'>
                     <input type="text" onChange = {props.onInputChange} name="" id="" className= 'w-70 pa2 f4 center'/>
                     <button onClick = {props.onButtonSubmit} className= 'w-30 grow link f4 ph3 pv2 pointer dib white bg-dark-green'> Detect</button>
                </div>
               
            </div>
        </div>

    )

}