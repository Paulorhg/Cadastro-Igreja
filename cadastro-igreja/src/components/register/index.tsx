import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"


export const Register = () => {

const auth = getAuth();
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

  return(
    <div>
        
    </div>
  )
}

