import React, { createContext } from "react";
import api from "../api";
const Context = createContext();

function AuthProvider({ Children }) {

  const [ authenticated, setAuthenticated] = useState(false);

  async function handleLogin(){
    const { data } = await api.post('/authenticated');
    setAuthenticated(true);
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin }}>
      {Children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
