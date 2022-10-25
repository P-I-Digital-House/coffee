import "../CardProduto/cardProduto.css";

export function CardProduto({ img, titulo, qtdd, preco }) {
  return (
    <div className="card-produtos">
      <img className="img-card-produtos" src={img} alt="" />
      <p className="titulo-card-produtos">{titulo}</p>
      <p className="qtdd-card-produtos">{qtdd}</p>
      <p className="preco-card-produtos">{preco}</p>
      <button className="btn-card-produtos" type="submit">
        comprar
      </button>
    </div>
  );
}
