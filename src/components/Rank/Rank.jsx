
import React from 'react';


export const Rank = ({name, entries}) => {

   return(

     <div>
         <div className='f3 white'>
             <span className = 'f2 black '>  {`${name} `}     </span>
             { 'your Rank is ...' } 
         </div>
         <div className='f1 white'>
           {  `# ${entries}`}
         </div>
     </div>
   )

}