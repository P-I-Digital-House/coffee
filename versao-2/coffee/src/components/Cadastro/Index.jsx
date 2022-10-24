import "./cadastro.css";

export function CadastroUsuario() {
  return (
    <div className="form-register">
      <h2>Cadastre-se</h2>
      <div className="register">
        <div className="step1">
        <span>Dados Pessoais</span>
          <div className="label">
            <label htmlFor="">Nome Completo</label>
            <input className="main" type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Documento</label>
            <input className="main" type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Data de Nascimento</label>
            <input className="main" type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Telefone</label>
            <input className="main" type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">E-mail</label>
            <input className="main" type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Senha</label>
            <input className="main" type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Confirmar Senha</label>
            <input className="main" type="text"/>
          </div>
        </div>
        <div className="step2">
          <span>Endereço da Entrega</span>
          <div className="label">
            <label htmlFor="">Tipo</label>
            <input className="main" type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">CEP</label>
            <input className="main" type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Logradouro</label>
            <input className="main" type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Número</label>
            <input className="main" type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Bairro</label>
            <input className="main" type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Cidade</label>
            <input className="main" type="text"/>
          </div>
          <div className="label">
            <label htmlFor="">Estado</label>
            <input className="main" type="text"/>
          </div>
        </div>
      </div>
      <div className="send">
        <input className="btn-send" type="button" value="Cadastrar" />
        <span>
          Você já tem Login? <a href="/login">Entre Aqui. </a>
        </span>
      </div>
    </div>
  );
}