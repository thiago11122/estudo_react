import React from "react";


export default class Remover extends React.Component{



	render(){

		return(
				<div style={{marginLeft:"20px"}}>
				<p style={{fontSize:"20px"}}><span style={{fontSize:"22pt"}}>4.</span>Apague a sua <strong>carta</strong> se necessário:</p>
					<button class="myButton" onClick={this.props.removerCa}>Cabeçalho</button>
					<button class="myButton" onClick={this.props.remover}>Texto</button>					
					<button class="myButton" onClick={this.props.removerAs}>Assinatura</button>
				</div>
		)
	}
}