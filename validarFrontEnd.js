const retornaValorDoElemento = (elemento) =>
  document.getElementById(`${elemento}`).value;

const verificaCamposVazios = (fields) => ("" in [...fields]);

const verificaCPFInvalido = (cpf) => ! (/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf));

const retornaMensagemErro = (primeiroTeste, segundoTeste) => {
  if(primeiroTeste)
    return "Por favor, preencha todos os campos!";
  if(segundoTeste)
    return "CPF inválido!"

}

const validarFormulario = () => {
  const erro = retornaMensagemErro(
    verificaCamposVazios([
      retornaValorDoElemento("nome"),
      retornaValorDoElemento("cpf"),
      retornaValorDoElemento("telefone"),
      retornaValorDoElemento("dataNascimento"),
      retornaValorDoElemento("senha"),
    ]),
    verificaCPFInvalido(cpf)
  );

  if(erro) {
    alert(erro);
    event.preventDefault();
  }
};
