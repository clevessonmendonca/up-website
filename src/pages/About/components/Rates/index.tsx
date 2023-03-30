import "./styles.css";

export const Rates = () => {
  return (
    <section id="services" className=" rates">
      <h2>A Opinião Importa!</h2>
      <p>Avaliações de nossos clientes.</p>
      <div className="cards">
        <div className="card">
          <img src="./src/assets/avatar.png" alt="avatar anonymous" />
          <h3 className="card-title">Isadora</h3>
          <p className="card-text">Adorei! Eles superaram minha expectativa.</p>
        </div>
        <div className="card">
          <img src="./src/assets/avatar.png" alt="avatar anonymous" />
          <h3 className="card-title">Mateus</h3>
          <p className="card-text">Desde que conheci a UP, só faço com eles meus produtos.</p>
        </div>
        <div className="card">
          <img src="./src/assets/avatar.png" alt="avatar anonymous" />
          <h3 className="card-title">Isadora</h3>
          <p className="card-text">Qualquer coisa que eu precise dos serviços deles, eu corro para eles... Uso e recomendo!</p>
        </div>
      </div>
    </section>
  );
};
