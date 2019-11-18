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

    deletecontact(key){

   let newArray=this.state.list.filter((m)=>m.key !== key);

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
			{this.state.list.map((val,index)=><div key={index}><li>{val}</li>
		     <button onClick={(key)=>this.deletecontact(key)}>delete</button></div>)
		 } 
			</ul>
			</div>
			);
			}
	}
















export default TodoLists;