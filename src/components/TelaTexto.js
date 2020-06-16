import React from 'react';
import letter from '../images/letter_background.jpg';

export default class TelaTexto extends React.Component{


	render(){
		return(
			<div style={{
			position:"absolute",
			top: "20%",
			right:"20%",
			display:"block",
			width:"400px", 
			height:"400px",
			backgroundImage:`url(${letter})`,
			backgroundSize: "100% 100%",
			boxShadow:"10px 10px 10px grey", 
			border:"solid 1px black",
			fontSize:this.props.tamanho+"px",
			fontFamily:"'URW Chancery L'",
			color: this.props.cor_fonte}}>
				<div style={{padding: "70px"}}>
					{this.props.cabecalho}
					<br/><br/>
					{this.props.texto}
					<br/><br/>
					{this.props.assinatura}
				</div>
				
			</div>
		)
	}
}