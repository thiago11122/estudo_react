import React from "react";


export default class Ocultador extends React.Component{

constructor(){
super();

	this.state={
		
	}

}

ocultarBotao(event){

	event.preventDefault();
	this.props.ocultar();
}

render(){


	return(
		<div>
			<button onClick={this.ocultarBotao.bind(this)}>Ocultar</button>
		</div>

	)
}



}