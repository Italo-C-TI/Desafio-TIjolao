import './styles.css';
import { useState } from 'react';

export default function Home() {
    const [numero,setNumero] = useState("");
    const [ultimoNumeroRecebido,setUltimoNumeroRecebido] = useState();
    const [codigo,setCodigo] = useState("");


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
        <div className='body_home'>
            <div className='celular'>
                <input className='visor' type="text" value="Foodlovers"></input>
                <div className='buttons'>
                    <div className='button1'></div>
                    <div className='button2'></div>
                    <div className='button3'></div>
                    <div className='button4'></div>
                    <div className='button5'></div>
                    <div className='button6'></div>
                    <div className='button7'></div>
                    <div className='button8'></div>
                    <div className='button9'></div>
                    <div className='buttonAst'></div>
                    <div className='button0'></div>
                    <div className='buttonReg'></div>
                </div>
            </div>
        </div>
    )
}