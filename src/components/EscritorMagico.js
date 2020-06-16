import React from 'react';
import TelaTexto from './TelaTexto';
import Escrever from './Escrever';
import Remover from './Remover';
import ModificadorFonte from './ModificadorFonte';
import ModificadorCor from './ModificadorCor';
import Cabecalho from './Cabecalho';
import Assinatura from './Assinatura';


export default class EscritorMagico extends React.Component{

	constructor(){
		super();

		this.state={

			texto_tela: "",
			texto_escrito: "",
			tamanho_fonte: 12,
			cor_fonte: "black",
			cabecalho:"",
			assinatura:"",
		}
	}

	alterarTexto(texto){

		this.setState({
			texto_tela: texto,
		})
	}

	alterarCabecalho(texto){

		this.setState({
			cabecalho:texto,
		})
	}

	alterarAssinatura(texto){

		this.setState({
			assinatura:texto,
		})
	}

	removerTexto(){

		this.setState({
			texto_tela:"",
		})
	}

	removerCabecalho(){

		this.setState({
			cabecalho: "",
		})
	}

	removerAssinatura(){

		this.setState({
			assinatura: "",
		})
	}

	alterarFonte(tamanho){

		this.setState({
			tamanho_fonte: tamanho,
		})

	}

	alterarCor(cor){

		this.setState({

			cor_fonte: cor,
		})
	}


	render(){
		return(
			<div>
					<TelaTexto texto={this.state.texto_tela}
							   tamanho = {this.state.tamanho_fonte}
							   cor_fonte = {this.state.cor_fonte}
							   cabecalho = {this.state.cabecalho}
							   assinatura = {this.state.assinatura}	  />
				<div style={{
					backgroundColor: "#F5F5F5",
					position: "absolute",
					width:"40%",
					height:"100%",
					borderRight: "1px solid #DCDCDC"
				}}>	
					<Cabecalho escrita={this.alterarCabecalho.bind(this)}/>
					<Escrever escrita={this.alterarTexto.bind(this)}/>
					<Assinatura escrita = {this.alterarAssinatura.bind(this)}/>
					<Remover remover  ={this.removerTexto.bind(this)}
							 removerCa ={this.removerCabecalho.bind(this)}
							 removerAs ={this.removerAssinatura.bind(this)}/>
					<ModificadorFonte alterar={this.alterarFonte.bind(this)} />
					<ModificadorCor alterarCor={this.alterarCor.bind(this)} />
				</div>
			</div>
		)
	}



}