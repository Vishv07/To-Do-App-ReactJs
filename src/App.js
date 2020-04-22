import React from 'react';
import logo from './LOGO.png';
import './App.css';

class App extends React.Component{

  constructor(props){
      super(props);
      this.state = {
     newItem: "",
      list:[]
      };
  }
  additem(todoval){
    if(todoval!== " "){
      const  newItem = { 
        id:Date.now(),
        value: todoval,
        isdone : false
      };
    
      const  list = [...this.state.list];
      list.push(newItem);
      this.setState({
      list,newItem:""
      });
  }}

  deleteitem(id){
  const  list = [...this.state.list];
  const updatedlist = list.filter(item => item.id !== id);
  this.setState({list:updatedlist});
}
updateinput(input){
  this.setState({newItem:input})
}
  render(){
    return(
      <div>
        <img  src={logo}  className="logo"  />
        <h1 className="tagline">TO DO APP</h1>
        <div className="container">
          Add an Item...  
          <br/>
            <input type="text"className="item-name" placeholder= "What U wanna do"
            required
            value={this.state.newItem}
            onChange={e=>this.updateinput(e.target.value)}
            />
            <button
            onClick={()=>this.additem(this.state.newItem)}
             className="btn-add"
             disabled={!this.state.newItem.length}
             > ADD </button>
        </div>
        <div className="list">
          <ul>
            {this.state.list.map(
                  item => {
                    return (
                      <li key={item.id} >
                      <input type="checkbox" name="isdone"
                      checked={item.isdone}
                      className="check" />
                      {item.value}
                      <button   
                      onClick={()=> this.deleteitem(item.id)}
                      className="btn-delete">DELETE</button>
                      </li>
                    );
                  }


            )}
              <li>
              <input type="checkbox" className="check" />
              Problem Solving
              <button className="btn-delete">DELETE</button>
              </li>  
          </ul> 

        </div>
      </div>
    
    );



  }
}

export default App;