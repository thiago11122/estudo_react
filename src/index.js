import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

ReactDOM.render(
	//Código para renderizar um componente chamado App, presente na pasta components da src
	<App/>,
	document.getElementById("app")
	//O segundo parâmetro do render indicará em que parte do código o elemento será renderizado
);