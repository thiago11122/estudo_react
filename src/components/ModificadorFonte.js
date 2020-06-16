import React from 'react';

export default class ModificadorFonte extends React.Component{

	constructor(){
		super();
		this.state={

			tamanho: "",
		}
	}


	myChangeHandler = (event) => {

    	this.setState({tamanho: event.target.value});

  	}

  	mudarTamanho(event){
  		event.preventDefault();
  		console.log(this.state.tamanho);
  		this.props.alterar(this.state.tamanho);

  	}

	render(){

		return(
				<div style={{marginLeft:"20px"}}>
					<p style={{fontSize:"20px"}}><span style={{fontSize:"22pt"}}>5.</span>Altere o tamanho texto da sua <strong>carta</strong>:</p>
					<input type="number" onChange={this.myChangeHandler}/>
					<button onClick={this.mudarTamanho.bind(this)}>Alterar Tamanho</button>
				</div>
		)
	}
}