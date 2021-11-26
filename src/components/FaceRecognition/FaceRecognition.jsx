
import React from 'react';
import './FaceRecognition.css'


export const FaceRecognition = ({imageUrl, box}) => {
   return (
       <div className="center ma">
           <div className = 'absolute mt2'>
               <img id ='inputImage' src={imageUrl} alt="imagekk" width = '500px' height = 'auto'/>
               <div className = 'bounding-box' 
                 style = {{top: box.topRow, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow}}>
                </div>
           </div>
           
       </div> 

   ) 

}
