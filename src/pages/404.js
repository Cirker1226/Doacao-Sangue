export default function Custom404() {
  return (
    <div className="container-404">
      <img className="error-mascote" src="/404.png" alt="Error 404" />
      <h1 id="error-title">Ops! Página não encontrada</h1>
      <p id="error-message">Parece que essa página não existe.</p>
      <button className="btn btn-danger"><a href="/" id="error-link">Voltar para o início</a></button>
    </div>
  );
}
