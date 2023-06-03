import React from 'react' //API de react
import ReactDOM from 'react-dom/client' //Elementos event del DOM
import './index.css' //Exporta una hoja de estilos
import App from './App.jsx' //Importa el .jsx y lo coloca en la función .render de ReactDOM

//se trata de una aplicación Javascript que se inyecta en un .html
ReactDOM.createRoot(document.getElementById('root')).render( //root APUNTA AL <BODY> DE index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
