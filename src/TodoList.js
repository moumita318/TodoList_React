import React, { Component } from "react";

class TodoLists extends Component {
	constructor(props){
		super(props);

		this.state={
			userInput:'',
			list:[]
		}
	} 
	changeUserInput(input){
		this.setState({
			userInput:input
		});
	}

	addToList(input){
		let listArray=this.state.list;
		listArray.push(input);

		this.setState({
			list:listArray,
			userInput:''
		})

	}

      deletecontact(val){

   let newArray=this.state.list.filter((e)=> e != val );

    	this.setState({
           list:newArray,
           userInput:''

    	})
    
}
	render() {
		return (
			<div className="todoListMain">
			<input 
			onChange={(e)=>this.changeUserInput(e.target.value)}   
			value={this.state.userInput} type="text"/>
			<button onClick={ ()=>this.addToList(this.state.userInput)}>submit</button>
			<ul>
			{this.state.list.map((val,index)=><div><li key={index}>{val}</li>
		     <button onClick={ ()=>this.deletecontact(val)}>delete</button></div>)
		 } 
			</ul>
			</div>
			);
			}
	}
















export default TodoLists;