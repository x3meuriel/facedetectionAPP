import React, {useState, useEffect} from 'react'



export const Feel = ()=>{ 
    
//     let i = 0;
     const names = ['pete', 'okey', 'jude', 'chika', 'dave'];
     const [index, incIndex] = useState(0) 
     const [name, setName] = useState(names[index])

    useEffect(()=>{
       const nameDiv = document.getElementsByClassName('name');
       console.log(nameDiv[0].innerHTML, index);
    //    nameDiv[0].innerHTML = name;

       document.getElementsByTagName('button')[0].value = index;
       document.title = {name}
    })

    let a = ''
    
     return(
         <div>
            <div className = 'mx-auto' style = {{backgroundColor: 'purple', color: ' white' }} 
                        onClick = {(event)=>{
                            setName(names[index])
                        } }>
                        <h1 className = 'name'>{name}</h1>  
            </div>
            <button 
            onClick = {()=>{incIndex(prevIndex=>prevIndex+1);setName(names[index])} }> increment: {index}</button>

         </div>
        
     )
 }

// export default Feel;

//     const nameHandler = (names) =>{
//         for(i=1; i<=2; i++){
//             setName(names[i])
//         }
        
//     }

{/* <div className = 'mx-auto' style = {{backgroundColor: 'purple', color: ' white' }} 
onClick = {(event)=>{names.map((name, index)=>{
    if(index==2){
        return setName(name)
    } 
    
})
}} > */}