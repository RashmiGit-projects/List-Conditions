import React,{Component} from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    userinput:"",
    inputlength:0    
  }

  lengthChangeHandler = (event) =>{

    const enteredtext = event.target.value;
    const len = enteredtext.length;

    this.setState({ userinput:enteredtext,inputlength:len }); 
   
  }

  removeCharHandler = (event,index) =>{
      const inputArray =  this.state.userinput.split('');
      inputArray.splice(index,1);
      const joinArray = inputArray.join(""); 
      const lenUpdated = joinArray.length;
      this.setState({ userinput:joinArray, inputlength:lenUpdated }); 
  }


  render()
  {
    const style={
       display:'inline-block',
       padding: '16px',
       textAlign:'center',
       margin:'16px',
       border: '1px solid black'
    }  

    let inputArray =  this.state.userinput.split('');
  
    let charBlock = inputArray.map((inputchar,index)=>{
      return(
            <CharComponent style={style} enteredchar={inputchar} key={index} clicked={(event)=>this.removeCharHandler(event,index)}/>
        )

    }); 

    return (
      <div className="App">
        <input type="text" value={this.state.userinput} onChange={this.lengthChangeHandler} />
        <p>Text Length: {this.state.inputlength}</p>
        <ValidationComponent textlength={this.state.inputlength} />
        {charBlock}
      </div>
    );

  }
  
}

export default App;
