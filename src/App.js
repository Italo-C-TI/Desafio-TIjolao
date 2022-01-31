import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [numero,setNumero] = useState("");
  const [ultimoNumeroRecebido,setUltimoNumeroRecebido] = useState();
  const [codigo,setCodigo] = useState("");
  const [botao3,setBotao3] = useState("");

  const [maiusculo,setMaiusculo] = useState(false);

  const handleAdicionaAoCodigo =(numeroRecebido)=>{
    if(numeroRecebido === '1'){
      return;
    }
    if(ultimoNumeroRecebido && ultimoNumeroRecebido !== numeroRecebido){
      console.log("é necessario enviar antes de adicionar uma nova letra");
      return;
    }
    if(!ultimoNumeroRecebido){
      setCodigo(codigo.trim() + numeroRecebido.trim());
    }if(ultimoNumeroRecebido && numeroRecebido === ultimoNumeroRecebido){
        setCodigo(codigo.trim() + numeroRecebido.trim());
    }
    setUltimoNumeroRecebido(numeroRecebido);
    console.log(codigo);

  }
  const handleEnviaCodigo = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000",
        {
          method: "POST",
          mode: 'no-cors',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            codigo: codigo,
            shift: maiusculo
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      setUltimoNumeroRecebido('');
      setCodigo('');

    } catch (error) {
      console.log(error);
      setUltimoNumeroRecebido('');
      setCodigo('');
    }
  };
  return (
    <div className="App">
        <h2 onClick={async () => {
          handleEnviaCodigo()
          }}>enviar</h2>
        
        <p onClick={() => {handleAdicionaAoCodigo("2")}}>2</p>
        <p onClick={() => {handleAdicionaAoCodigo("3")}}>3</p>
        <p onClick={() => {handleAdicionaAoCodigo("4")}}>4</p>
        <p onClick={() => {handleAdicionaAoCodigo("5")}}>5</p>
        <p onClick={() => {handleAdicionaAoCodigo("6")}}>6</p>
        <p onClick={() => {handleAdicionaAoCodigo("7")}}>7</p>
        <p onClick={() => {handleAdicionaAoCodigo("8")}}>8</p>
        <p onClick={() => {handleAdicionaAoCodigo("9")}}>9</p>
        <p onClick={() => {handleAdicionaAoCodigo("0")}}>0</p>
    </div>
  );
}

export default App;
