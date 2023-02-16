import { createContext, useState, useEffect } from 'react'
import { getCookie,setCookie } from 'react-use-cookie'

export const LoginContext = createContext({})

export const LoginProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false)

  function getUserCookie() {
    const usuario = getCookie("user")
    if(usuario != "" && usuario!= null){
        const{name, email} = JSON.parse(usuario)
        if(email == 'admin@email.com') setIsAdmin(true)
        else setIsAdmin(false)
        return name;
    }else setIsAdmin(false)
  }

  function logout(){
    if (getUserCookie()){
        var r=confirm("Deseja fazer logout?");
        if(r==true){
            setCookie("user", "")
            setCookie("token", "")
        }
        return true;
    }else{
        alert("Você nao está logado")
        return false
    }
  }

    return (
        <LoginContext.Provider value={{getUserCookie, logout, isAdmin}}>{children}</LoginContext.Provider>
    )
}