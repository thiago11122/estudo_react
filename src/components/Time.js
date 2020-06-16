import React from 'react';


export default class Time extends React.Component{

constructor(){
super();
	this.state={

		contador: 0,
	};
}


aumentar(){

	this.setState({
		contador: this.state.contador +1,
	});
}

render(){

	return (

		<div>
			<h2>Time1</h2>
			<h3>{this.state.contador}</h3>
			<button onClick={this.aumentar.bind(this)}>Ponto!</button>
		</div>
	)
}


} 