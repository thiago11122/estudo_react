import React from 'react';


export default class Cabecalho extends React.Component{

	constructor(){
		super();
		this.state={

			texto:"",
		}
	}


	myChangeHandler = (event) => {

    	this.setState({texto: event.target.value});

  	}

  	mudar(event){
  		event.preventDefault();
  		this.props.escrita(this.state.texto);
 	
  	}

	render(){
		return(
			<div style={{marginLeft:"20px"}}>
				<p style={{fontSize:"20px"}}><span style={{fontSize:"22pt"}}>1.</span>Escreva o cabeçalho da sua <strong>carta</strong>:</p>
				<input type="text" onChange={this.myChangeHandler}/>
				<button onClick={this.mudar.bind(this)}>Escrever</button>
			</div>

		)
	}
}