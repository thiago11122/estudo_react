import React from 'react';
import Time from './Time.js';
import Estadio from './Estadio.js';
import Ocultador from './Ocultador.js';

export default class PlacarContador extends React.Component{

//Sobrescrita do construtor da classe. Isto é necessário para se crair estados para esta classe.
//Estados são elementos do React que podem ser alterados
constructor(){
super();

	this.state = {

		//Cria um estado chamado contador
		nome: "",
		nomeTela:"",
		ocultador:"block",
	}

}

myChangeHandler = (event) =>{

	this.setState({
		nome: event.target.value,
	})
}

enviar(){

	this.setState({
		nomeTela:this.state.nome,
	})
}

ocultar(){

	this.setState({
		ocultador: "none",
	})
}


	render(){
		//this.state.contador mostra o valor do estado contador
		//this.aumentar.bind(this) é a forma de chamar o método aumentar dentro do onClcik
		return (
			<div style={{display: this.state.ocultador}}>
				<h1>{this.props.nome}</h1>
				<h2>{this.props.idade}</h2>
				<Ocultador
				ocultar={this.ocultar.bind(this)}/>
			</div>

		);
	}
}