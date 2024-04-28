function validarFormulario() {
        var nome = document.getElementById("nome").value;
            var cpf = document.getElementById("cpf").value;
            var telefone = document.getElementById("telefone").value;
            var dataNascimento = document.getElementById("data_nascimento").value;
            var senha = document.getElementById("senha").value;

            // Verifica se todos os campos foram preenchidos
            if (nome === "" || cpf === "" || telefone === "" || dataNascimento === "" || senha === "") {
                alert("Por favor, preencha todos os campos.");
                return false;
            }

            // Verifica o formato do CPF (apenas números)
            if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
                alert("CPF inválido!");
                return false;
            }

            // Outras validações podem ser adicionadas aqui

            return true; // Retorna true se todas as validações passaram
        }