document.addEventListener("DOMContentLoaded", function() {
    // 1. Pegamos o formulário pelo ID que está no seu HTML
    const form = document.getElementById("meuFormulario");

    // Verificação de segurança: só executa se o form existir na página
    if (!form) return;

    form.addEventListener("submit", function(e) {
        // Impede o envio imediato para que a validação ocorra
        e.preventDefault();

        // 2. Captura dos valores usando os IDs do seu HTML
        const nome = document.getElementById("Nome").value.trim();
        const telefone = document.getElementById("Telefone").value.trim();
        const pesoRaw = document.getElementById("Peso").value;
        const idadeRaw = document.getElementById("Idade").value;
        const estado = document.getElementById("Estado").value.trim();
        const cidade = document.getElementById("Cdd").value.trim();
        const tipoSanguineo = document.getElementById("TPS").value;
        const email = document.getElementById("Email").value.trim();

        // 3. Validações com Alerts (Pop-ups)
        
        if (nome === "") {
            alert("⚠️ O campo 'Nome Completo' é obrigatório.");
            return;
        }

        if (telefone === "") {
            alert("⚠️ O campo 'Telefone' é obrigatório.");
            return;
        }

        if (pesoRaw === "") {
            alert("⚠️ O campo 'Peso' é obrigatório.");
            return;
        } else if (Number(pesoRaw) < 50) {
            alert("❌ Desculpe, o peso mínimo para doação é 50kg.");
            return;
        }

        if (idadeRaw === "") {
            alert("⚠️ O campo 'Idade' é obrigatório.");
            return;
        } else if (Number(idadeRaw) < 16) {
            alert("❌ Desculpe, a idade mínima para doação é 16 anos.");
            return;
        }

        if (estado === "") {
            alert("⚠️ O campo 'Estado' é obrigatório.");
            return;
        }

        if (cidade === "") {
            alert("⚠️ O campo 'Cidade' é obrigatório.");
            return;
        }

        if (tipoSanguineo === "") {
            alert("⚠️ Por favor, selecione um 'Tipo Sanguíneo'.");
            return;
        }

        if (email === "") {
            alert("⚠️ O campo 'Email' é obrigatório.");
            return;
        }

        // 4. Se passar por todas as validações acima:
        alert("✅ Tudo pronto! Seu formulário foi preenchido corretamente.");
        
        // Envia o formulário de fato
        this.submit();
    });
});