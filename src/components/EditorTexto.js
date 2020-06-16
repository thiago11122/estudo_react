import React from 'react';
import Escrever from './Escrever';
import Remover from './Remover';
import ModificadorFonte from './ModificadorFonte';
import ModificadorCor from './ModificadorCor';

export default class EditorTexto extends React.Component{


	constructor(){
		super();

		this.state={

			texto_tela: "",
			texto_escrito: "",
			tamanho_fonte: 12,
			cor_fonte: "black",
		}
	}

	alterarTexto(texto){

		this.setState({
			texto_tela: texto,
		})
	}

	removerTexto(){

		this.setState({
			texto_tela:"",
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
					<Escrever escrita={this.alterarTexto.bind(this)}/>
					<Remover remover ={this.removerTexto.bind(this)}/>
					<ModificadorFonte alterar={this.alterarFonte.bind(this)} />
					<ModificadorCor alterarCor={this.alterarCor.bind(this)} />
				</div>


		)
	}
}