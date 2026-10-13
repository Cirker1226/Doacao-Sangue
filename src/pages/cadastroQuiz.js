export default function cadastroQuiz() {
    return (
        <div className="quiz-perguntas">
            <h1 id="pagina-tittle">Perguntas do Quiz</h1>
            <p id="pagina-subtitle">Cadastre, edite e exclua perguntas do quiz.</p>

            <div className="container-crud">
                <h3>Nova Pergunta</h3>

                <FormularioQuiz />
            </div>

            <PerguntasCadastradas />
        </div>
    );
}

function FormularioQuiz() {
    return (
        <>
            <form className="form-crud">
                <label htmlFor="pergunta">Pergunta</label>
                <input type="text" id="pergunta" name="pergunta" placeholder="Ex: Quem tem tatuagem nunca pode doar sangue?" required/>

                <label htmlFor="resposta">Resposta Certa</label>
                <div className="opcoes">
                    <input type="radio" id="mito" name="resposta" value="mito" required/>
                    <label htmlFor="mito">Mito</label>

                    <input type="radio" id="verdade" name="resposta" value="verdade"/>
                    <label htmlFor="verdade">Verdade</label>
                </div>

                <label htmlFor="explicacao">Explicação Curta</label>
                <input type="text" id="explicacao" name="explicacao" placeholder="Explique em uma ou duas frases" required/>
            </form>

            <div className="botoes">
                <button type="button" className="btn-cadastrar">Cancelar</button>
                <button type="submit" form="formulario-quiz" className="btn-editar">Cadastrar Pergunta</button>
            </div>
        </>
    );
}

function PerguntasCadastradas() {
    return (
        <section className="container-cadastradas">
            <div className="perguntas-cadastradas">
                <h3>Perguntas Cadastradas</h3>
                <p>4 perguntas</p>
            </div>

            <div className="card-pergunta">
                <div className="icon-pergunta">
                    <i className="bi bi-question"></i>
                </div>

                <div className="pergunta-content">
                    <p>Quem tem tatuagem nunca pode doar sangue?</p>
                    <p className="resposta">Mito</p>
                </div>

                <div className="acoes-pergunta">
                    <button type="button" className="btn-acao btn-editar-pergunta" aria-label="Editar pergunta" title="Editar"> <i className="bi bi-pencil"></i></button>
                    <button type="button" className="btn-acao btn-excluir-pergunta" aria-label="Excluir pergunta" title="Excluir"> <i className="bi bi-trash"></i></button>
                </div>
            </div>
        </section>
    );
}