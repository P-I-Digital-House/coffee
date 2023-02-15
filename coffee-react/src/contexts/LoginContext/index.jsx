import { createContext, useState } from 'react'
import { getCookie,setCookie } from 'react-use-cookie'

export const LoginContext = createContext({})

export const LoginProvider = ({ children }) => {

  function getUserCookie() {
    const usuario = getCookie("user")
    if(usuario != "" && usuario!= null){
        const{name} = JSON.parse(usuario)
        return name;
    }
  }

  function logout(){
    if (getUserCookie()){
        var r=confirm("Deseja fazer logout?");
        if(r==true){
            setCookie("user", "")
            setCookie("token", "")
        }
    }else{
        alert("Você nao está logado")
    }
  }

    return (
        <LoginContext.Provider value={{getUserCookie, logout}}>{children}</LoginContext.Provider>
    )
}