import { StrictMode } from 'react' //ayuda a detectar problemas en la aplicacion durante el desarroyo
import { createRoot } from 'react-dom/client' //trae la funcion que conecta React con el html real del navegador
import './index.css' //importa el archivo de estilos css
import App from './App.jsx' //importa el componente principal de la aplicacion

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
