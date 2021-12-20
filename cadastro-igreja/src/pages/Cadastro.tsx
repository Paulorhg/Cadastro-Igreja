import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function Cadastro(){
  const navegate = useNavigate();

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')


  const auth = getAuth();
  function SignUp () {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navegate('/')
      // ...
    })
    .catch((error) => {
      console.log(error)
      setError(error.message);
      if(error.code.includes('auth/weak-password'))
        setError("A senha deve incluir ao menos 6 digitos");
      if(error.code.includes('auth/email-already-in-use'))
        setError("Email ja cadastrado");
      // ..
    });
  }
  


  return (
    <div className="h-screen flex">
      <div className=" h-full w-screen flex flex-col justify-center items-center">
        <div className="text-3xl mb-12">
          <strong>Cadastrar Usuário</strong>
        </div>
        <div className="w-full max-w-sm">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Digite sua senha"
                onChange={event => setPassword(event.target.value)} 
              />
            </div>
            <div className="flex items-center justify-between">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button"
                onClick={SignUp}
              >
                Cadastrar
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