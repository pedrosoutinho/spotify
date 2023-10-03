export default function Faq() {
    return (
        <div className="container mt-3">
            <h1 className="text">Ajuda rápida</h1>
            <div className="accordion mt-3" id="faqAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            Não consigo redefinir a senha
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Você precisa ter acesso ao endereço de e-mail cadastrado na sua
                            conta do Unispot para abrir o link de redefinição de senha que nós
                            enviamos.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Não lembro minhas informações de login
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Se você não se lembrar da sua senha, use a página de redefinição de
                            senha.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Ajuda para entrar com o Facebook
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Para entrar no Unispot com sua conta do Facebook, use essa rede
                            social na inscrição ou faça a vinculação.
                            <br />
                            <br />
                            Também é possível exibir a foto e o nome do seu perfil do Facebook
                            no app e encontrar seus amigos no Unispot com facilidade.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            Formas de pagamento
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            <br />
                            <ul>
                                <li>Cartão de crédito/débito</li>
                                <li>Cartões pré-pagos</li>
                                <li>PayPal</li>
                                <li>Vales-presente</li>
                                <li>Pagamento móvel</li>
                                <li>Plano pré-pago</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                        >
                            Não lembro minhas informações de login
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Para continuar a expandir nossa plataforma, os preços do Premium vão
                            ser atualizados. Assim, podemos inovar mesmo com as mudanças do
                            mercado. Essas atualizações nos ajudam a continuar entregando
                            conteúdo de qualidade aos fãs.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
