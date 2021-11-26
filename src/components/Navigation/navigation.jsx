
import React from 'react';


 export const Navigation = ({onRouteChange, isSignedIn}) => {
    
    if(isSignedIn) {
        return (
            <nav style = {{display: 'flex', justifyContent: "end"}} >
                <p className= 'link f3 black dim underline pointer pa3'
                onClick ={ ()=>{onRouteChange('signin')
                    }
                }
                > Sign Out
                 </p>
         </nav>
        )
    }

    else{
        return (
            <div>
                <nav style = {{display: 'flex', justifyContent: "end"}} >
                    <p className= 'link f3 black dim underline pointer pa3'
                    onClick ={ ()=>{onRouteChange('signin')}}> Sign in </p>
                    <p className= 'link f3 black dim underline pointer pa3'
                    onClick ={ ()=>{onRouteChange('register')}}> Register </p>
                </nav>
               
            </div>
            
        )
    }

      
    

 }
