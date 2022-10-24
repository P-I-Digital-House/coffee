import "./cadastro.css";

export function CadastroUsuario() {
  return (
    <div className="form-register">
      <h2>
        ["<span className="detalhe-produtos">cadastre-se</span>"];
      </h2>
      <div className="register">
        <div className="step1">
          <span className="cadastro">Dados Pessoais</span>
          <div className="label">
            <label htmlFor="">Nome Completo</label>
            <input className="main" type="text" />
          </div>
          <div className="label">
            <label htmlFor="">Documento</label>
            <input className="main" type="text" />
          </div>
          <div className="label">
            <label htmlFor="">Data de Nascimento</label>
            <input className="main" type="text" />
          </div>
          <div className="label">
            <label htmlFor="">Telefone</label>
            <input className="main" type="text" />
          </div>
          <div className="label">
            <label htmlFor="">E-mail</label>
            <input className="main" type="text" />
          </div>
          <div className="label">
            <label htmlFor="">Senha</label>
            <input className="main" type="text" />
          </div>
          <div className="label">
            <label htmlFor="">Confirmar Senha</label>
            <input className="main" type="text" />
          </div>
        </div>
        <div className="step2">
          <span className="cadastro">Endereço da Entrega</span>
          <div className="label">
            <label htmlFor="">Tipo</label>
            <input className="main" type="text" />
          </div>
          <div className="label">
            <label htmlFor="">CEP</label>
            <input className="main" type="text" />
          </div>
          <div className="label">
            <label htmlFor="">Logradouro</label>
            <input className="main" type="text" />
          </div>
          <div className="label">
            <label htmlFor="">Número</label>
            <input className="main" type="text" />
          </div>
          <div className="label">
            <label htmlFor="">Bairro</label>
            <input className="main" type="text" />
          </div>
          <div className="label">
            <label htmlFor="">Cidade</label>
            <input className="main" type="text" />
          </div>
          <div className="label">
            <label htmlFor="">Estado</label>
            <input className="main" type="text" />
          </div>
        </div>
      </div>
      <div className="send">
        <button className="btn-card-produtos btn-send" type="submit">
          cadastrar
        </button>
        <span className="cadastro">
          Você já tem Login? <a href="/login">Entre Aqui. </a>
        </span>
      </div>
    </div>
  );
}
