import React from 'react';

export default class ModificadorCor extends React.Component{
	constructor(){
		super();

	}

	changeHandler = (event) =>{

		this.props.alterarCor(event.target.value)
		console.log(event.target.value)

	}


	render(){

		return(
			<div style={{marginLeft:"20px"}}>
				<p style={{fontSize:"20px"}}><span style={{fontSize:"22pt"}}>6.</span>Mude a cor do texto da sua <strong>carta</strong>:</p>
				<input type="radio" name="cor" value="red" onChange={this.changeHandler}  />
				Vermelho
				<input type="radio" name="cor" value="black" onChange={this.changeHandler}  />
				Preto
				<input type="radio" name="cor" value="blue" onChange={this.changeHandler}  />
				Azul
			</div>

		)
	}
}