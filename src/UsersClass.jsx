import axios from 'axios';
import React, { Component } from 'react'

export default class Users extends Component {

    constructor(){
        super();
        console.log("Init phase constructor");
        this.state = {
            name:"Thaslima"
        };
    }

    updateName(e){
       
        const {value} = e.target // input.value;
        console.log(value);
        this.setState({name:value});
        
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
        document.title = "Users"
        const URL = "https://jsonplaceholder.typicode.com/users";
      
       
        const getData = async()=>{
            try {
                
                console.log("Begin network request");
                const userData = await axios.get(URL);
                console.log(userData.data);    
            } catch (error) {
                console.log("catch block",error.message);
            }
            
        }

        getData();
    }
    render() {
        console.log("render",this.state);
        const {name} = this.state;
        return (
            <>
                <input type="text" placeholder='Enter name'  onChange={event=>this.updateName(event)}/>
                <div>Hello {name}</div>
                <button onClick={()=>alert(`Hello ${name}`)}>Show greeting</button>
            </>
        )
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log({nextProps});
        console.log({nextState});
        console.log("shouldComponentUpdate");
        return true;
    };

    componentWillUpdate(...args){
        console.log(args);
        console.log("componentWillUpdate");
    };

    componentDidUpdate(...args){
        console.log(args);
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
}
