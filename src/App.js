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
    if(numeroRecebido == '1'){
      return;
    }
    setUltimoNumeroRecebido(numeroRecebido)
    setCodigo(codigo.trim() + numeroRecebido.trim());

  }
  const handleEnviaCodigo = async () => {
    try {
      const response = await fetch(
        "https://",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            codigo: 1,
            shift: maiusculo
          }),
        }
      );


    } catch (error) {

    }
  };
  return (
    <div className="App">
        <h2>TESTE</h2>
    </div>
  );
}

export default App;
