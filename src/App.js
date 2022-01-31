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
      alert("é necessario enviar antes de adicionar uma nova letra");
      return;
    }
    if(!ultimoNumeroRecebido){
      setCodigo(codigo.trim() + numeroRecebido.trim());
    }if(ultimoNumeroRecebido && numeroRecebido === ultimoNumeroRecebido){
        setCodigo(codigo.trim() + numeroRecebido.trim());
    }
    setUltimoNumeroRecebido(numeroRecebido);

  }
  const handleEnviaCodigo = async () => {
    try {
      const response = await fetch(
        "https://localhost:8000",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            codigo: codigo,
            shift: maiusculo
          }),
        }
      );
      setUltimoNumeroRecebido();

    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="App">
        <h2 onClick={() => {
          handleEnviaCodigo()
          }}>TESTE</h2>

        <p onClick={handleAdicionaAoCodigo(2)}>2</p>
        <p onClick={handleAdicionaAoCodigo(3)}>3</p>
        <p onClick={handleAdicionaAoCodigo(4)}>4</p>
        <p onClick={handleAdicionaAoCodigo(5)}>5</p>  
    </div>
  );
}

export default App;
