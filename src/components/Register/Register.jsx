import React , {Component} from 'react';



export class Register extends Component  {
    constructor (props){
        super(props)
 
        this.state = {
            
          registerName: '',
          registerPassword: '',
          registerEmail: ''
        }
 
    }
    onNameChange = (event)=>{
         this.setState({registerName: event.target.value})
    }
    onPasswordChange = (event)=>{
         this.setState({registerPassword: event.target.value})
    }
    onEmailChange = (event)=>{
        this.setState({registerEmail: event.target.value})
   }
 
    onSubmitRegister = () => {
        fetch('http://localhost:3005/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.registerName,
                password: this.state.registerPassword,
                email: this.state.registerEmail 
            })
        }).then(response => response.json())      
         .then(
             user => {
             if(user.status === 'registered successfully'){
                //  this.props.updateNameAndEntry(user.name, user.entries)
                 this.props.loadUser(user.user);
                  
                  this.props.onRouteChange('home');  
             }
         
         }
         )
     //    console.log(this.state)
     
 
    } 
    render()
    {   
        // const {onRouteChange} = this.props
        
        return (
                <article className="mw6 shadow-5 transparent center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                                <legend className="f1 fw6 ph0 mh0 center">Register</legend>
                                <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlfor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" 
                                onChange = {this.onNameChange}
                                id="name" />
                                </div>
                                <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlfor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" 
                                onChange = {this.onEmailChange}
                                id="email-address" />
                                </div>
                                <div class="mv3">
                                <label className="db fw6 lh-copy f6" for="password">Password </label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" 
                                onChange= {this.onPasswordChange}
                                id="password" />
                                </div>
                            </fieldset>
                          <div className="">
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" 
                                onClick = { this.onSubmitRegister }
                                />
                            </div>
                    
                         </div>
                </main> 
            </article>
               
            
        ) 
    }
}