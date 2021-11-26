import React, {Component} from 'react';
import {Feel} from './components/Signin/Feel'
import Particles from 'react-particles-js';
import {Navigation} from './components/Navigation/navigation';
import {Logo} from './components/Logo/Logo';
import {ImageLinkForm} from './components/ImageLinkForm/ImageLinkForm';
import {Rank} from './components/Rank/Rank';
import {FaceRecognition} from './components/FaceRecognition/FaceRecognition'; 
import {Signin} from './components/Signin/Signin'; 
import {Register} from './components/Register/Register';  
import {Reg404} from './components/Reg404/Reg404';  
import './App.css';  





const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin', 
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    
    this.state = initialState


  }


  
  // All life cycle methods here
  
  componentDidMount (){
    fetch('http://localhost:3005').then(
      response => response.json()
    ).then(
      data => (console.log)
    )
  }
  
  // functions used in the app
  
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        email: data.email,
        name: data.name,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
  // console.log(width, height);

  return {
    leftCol: clarifaiFace.left_col * width,
    rightCol: width - (clarifaiFace.right_col * height) ,
    topRow: clarifaiFace.top_row * height,
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }

  }

  displayBox  = (box) => {
    this.setState({box: box})
    console.log(box);
  }
 
  onRouteChange = (route) =>{
    if(route === 'signout' ){
      this.setState(initialState)
    }
    else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route
    })
  }

  updateNameAndEntry = (names, incEntries) => {
    this.setState({
      user: {
        name: names,
        entries: incEntries

      }
    })
  }

  onInputChange = (event) => {
     this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('http://localhost:3005/imageurl', {
      method: 'post',
      body: {
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            input: this.state.input,
        })
      }
    })  
    .then(response => response.json())  
    .then(response => 
      {
      if (response){
        fetch('http://localhost:3005/image', {
          method: 'put',
          body: {
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id,
            })
          }
        }).then(
          response => response.json()
        ).then (
          count => {
            this.setState( Object.assign(
              this.state.user, { entries: count}))
          }
        )
        .catch(console.log)
      }
      this.displayBox(this.calculateFaceLocation(response)) })
      .catch( err => console.log(err)); 
  }
  // end of functions
 
  render() 
  { 
    const {isSignedIn,box,route,imageUrl, user} = this.state
    return ( 
      <div className="App">
        <Feel />
        <Particles className= 'particles'
          params={{
            "particles": {
              "number": {
                "value": 70
              },
              "size": {
               "value": 3
              },
              "density": {
                enable: true,
                value_area: 800
              }
            },
            "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  }
                 }
             }
          }} 
      />
        
        <Navigation isSignedIn = {isSignedIn} onRouteChange = { this.onRouteChange}   /> 
        
        {
          route ===  'home'
           ? 
           <div>
            <Logo  /> 
            <Rank name = {user.name} entries = {user.entries} />
            <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} /> 
            <FaceRecognition box = {box} imageUrl = {imageUrl} /> 
          </div>
          : (route === 'signin' ? 
          <Signin updateNameAndEntry = {this.updateNameAndEntry} onRouteChange = {this.onRouteChange} user = {user}/>
          : 
          (route === 'unable to register')?
          <Reg404 onRouteChange = {this.onRouteChange} />:
          <Register updateNameAndEntry = {this.updateNameAndEntry} loadUser= {this.loadUser} onRouteChange = { this.onRouteChange} />
          )
          
          
         
        }
        
        
      </div>
    );

  }
 
}

export default App;
