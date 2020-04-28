import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api'
import Home from './components/home'


class App extends Component {
  state={
    data:{},
    countrys:"",
  }

  handleChange=async(c)=>{
    console.log("asdfghjkjhgfdsasdfghjkjhgfdsasdfghjkjhgfdsaasdfghj",c);
    
    const fetchedData1= await fetchData(c);
    this.setState({countrys:c , data:fetchedData1})
    

  }

  async componentDidMount(){
   
    
    const fetchedData= await fetchData();
    
    this.setState({data: fetchedData});
    console.log(this.state.data);
  }
  render() {
    const {data}=this.state;
    return (
     <div className="containers">
       <Cards data={data}/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       
       <CountryPicker  handleChange={this.handleChange} />
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       
       <Charts data={data} countrys={this.state.countrys}/>
      
      
       
       

     </div>
    );
  }
}

export default App;
