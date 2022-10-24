import "../Newsletter/news.css";

export function News() {
  return (
    <section className=" txt-center newsletter">
         <div className="container">
            <p><span className="detalhe-newsletter">[</span>"receba nossas ofertas por e-mail"<span className="detalhe-newsletter">]</span></p>
            <input className="input-news" type="email" placeholder="digite seu e-mail"/>
            <a href="#"><button className="btn-assinar-newsletter">assinar</button></a>
         </div>
      </section>
  );
}
