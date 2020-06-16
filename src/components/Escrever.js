import React from 'react';


export default class Escrever extends React.Component{

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
				<p style={{fontSize:"20px"}}><span style={{fontSize:"22pt"}}>2.</span>Escreva o texto da sua <strong>carta</strong>:</p>
				<textArea type="text" onChange={this.myChangeHandler}/>
				<button onClick={this.mudar.bind(this)}>Escrever</button>
			</div>

		)
	}
}