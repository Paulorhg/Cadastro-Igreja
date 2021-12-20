import { useNavigate } from 'react-router-dom'
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function Carteira() {

  const navigate = useNavigate();

  function handleNavigate(){
    navigate("/home");
  }

  return(
    <div className="w-screen px-6 py-8">
      <div>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-20"
          onClick={handleNavigate}
          >
          Voltar
        </button>
      </div>
      <div className="text-3xl mb-12 md:mb-24"><strong>Cadastrar nova carteira</strong></div>
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-12 px-24 rounded text-xl">
          Cadastrar nova carteira
        </button>
      </div>
    </div>
  )
}