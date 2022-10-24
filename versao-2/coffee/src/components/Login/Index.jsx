import "../Login/login.css";

export function LoginUsuario() {
  return (
    <div className="form-login">
      <h2>Faça seu Login</h2>
      <div className="login">
        <div className="label">
          <label htmlFor="">E-mail</label>
          <input className="main" type="text" />
        </div>
        <div className="label">
          <label htmlFor="">Senha</label>
          <input className="main" type="text" />
        </div>
        <span>
          <a href="#">Esqueci minha senha</a>
        </span>
      </div>
      <div className="btn">
        <input className="btn-send main" type="button" value="Entrar" />
      </div>
      <span>
        Você ainda não tem Login?
        <a href="/login/cadastro"> Registre-se Aqui.</a>
      </span>
    </div>
  );
}
