import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function Login(){
  const navegate = useNavigate();

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

const auth = getAuth();

function SignIn() {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    navegate("/home")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    if(error.code.includes('auth/user-not-found'))
        setError("Usuario não encontrado");
    if(error.code.includes('auth/wrong-password'))
      setError("Senha incorreta");
    if(error.code.includes('auth/invalid-email'))
      setError("Email invalido");
    if(error.code.includes('auth/too-many-requests'))
      setError("Houve muitas tentativas erradas, tente novamente mais tarde");
  });
}

  return (
     <div className="h-screen flex">
       <div className="bg-blue-600 w-1/3 h-full"></div>
       <div className=" h-full w-2/3 flex justify-center items-center">
       
        <div className="w-full max-w-sm">
        <div className="text-3xl mb-8">
          <strong>Login</strong>
        </div>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Digite seu Email"
                onChange={event => setEmail(event.target.value)} 
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Senha
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Digite sua senha"
                onChange={event => setPassword(event.target.value)} 
              />
              <Link className="mx-auto text-sm text-gray-500" to="/esqueceu-sua-senha">Esqueceu a senha?</Link>
            </div>
            <div className="flex items-center justify-between">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button"
                onClick={SignIn}
                >
                Entrar
              </button>
            </div>
            {error && 
              <p className="w-full mt-3 text-red-500">{error}</p>
            }
          </form>
        </div>
       </div>
     </div>
  )
}