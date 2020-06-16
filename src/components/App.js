import React from "react";
//Faz a importação da biblioteca react para a variável React

import EscritorMagico from "./EscritorMagico";

//Cria uma classe App que é um Component do React, dá ela herdar do React.Component
//e estabelece ela como a exportação padrão para este arquivo. Isto quer dizer que,
//quando este arquivo for exportado em algum outro arquivo, esta será a primeira 
//classe a ser exportada


export default class App extends React.Component{
	
	//render é para renderizar algo na tela
	render(){

		return (
				<div>
					<div style={{borderBottom:"1px solid #DCDCDC"}}>
					<h1 style={{marginLeft:"20px"}}><i>E</i>scritor de carta</h1>
					</div>
					<EscritorMagico/>
				</div>
		);
	}
}