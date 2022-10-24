import "../Login/login.css";

export function LoginUsuario() {
  return (
    <div className="form-login">
<h2>
        ["<span className="detalhe-produtos">login</span>"];
      </h2>      <div className="login">
        <div className="label">
          <label htmlFor="">E-mail</label>
          <input className="main" type="text" />
        </div>
        <div className="label">
          <label htmlFor="">Senha</label>
          <input className="main" type="text" />
        </div>
        <span className="cadastro">
          <a href="#">Esqueci minha senha</a>
        </span>
      </div>
      <div className="btn">
      <button className="btn-card-produtos btn-send" type="submit">
        login
      </button>
      </div>
      <span className="cadastro">
        Você ainda não tem Login?
        <a href="/login/cadastro"> Registre-se Aqui.</a>
      </span>
    </div>
  );
}
