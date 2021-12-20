import { useNavigate } from 'react-router-dom'

export function Home() {

  const navigate = useNavigate();

  function handleNavigate(){
    navigate("/cadastro-carteira");
  }

  return(
    <div className="w-screen px-24 py-28">
      <div className="text-3xl mb-24"><strong>Bem Vindo</strong></div>
      <div className="flex justify-center">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-12 px-24 rounded text-xl"
          onClick={handleNavigate}
          >
          Cadastrar nova carteira
        </button>
      </div>
    </div>
  )
}