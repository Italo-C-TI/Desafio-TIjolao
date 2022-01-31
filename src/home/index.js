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
      setCodigo(numeroRecebido.trim());
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
                <input className='visor' type="text" value=""></input>
                <div className='button-enter' onClick={async () => {
          handleEnviaCodigo()
          }}>ENTER</div>
                <div className='buttons'>
                    <div className='button1'></div>
                    <div className='button2' onClick={() => {handleAdicionaAoCodigo("2")}}></div>
                    <div className='button3' onClick={() => {handleAdicionaAoCodigo("3")}}></div>
                    <div className='button4' onClick={() => {handleAdicionaAoCodigo("4")}}></div>
                    <div className='button5' onClick={() => {handleAdicionaAoCodigo("5")}}></div>
                    <div className='button6' onClick={() => {handleAdicionaAoCodigo("6")}}></div>
                    <div className='button7' onClick={() => {handleAdicionaAoCodigo("7")}}></div>
                    <div className='button8' onClick={() => {handleAdicionaAoCodigo("8")}}></div>
                    <div className='button9' onClick={() => {handleAdicionaAoCodigo("9")}}></div>
                    <div className='buttonAst'></div>
                    <div className='button0' onClick={() => {handleAdicionaAoCodigo("0")}}></div>
                    <div className='buttonReg' onClick={()=>setMaiusculo(!maiusculo)}></div>
                </div>
            </div>
        </div>
    )
}