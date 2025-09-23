function enviarParaWhatsApp() {
        // Captura o valor do campo de texto com base no ID
        var mensagem = document.getElementById('message-input').value;
        
        // Define o número de telefone e codifica a mensagem para a URL
        var numeroTelefone = '5513982051256';
        var mensagemCodificada = encodeURIComponent(mensagem);
        
        // Constrói a URL do WhatsApp com o parâmetro 'text'
        var urlWhatsApp = 'https://wa.me/' + numeroTelefone + '?text=' + mensagemCodificada;
        
        // Redireciona o usuário para a URL
        window.open(urlWhatsApp, '_blank');
    }