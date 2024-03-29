var senha = document.getElementById('senha');
var form = document.getElementById('form1');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    verificaSenha();
});

function verificaSenha() {
    var entrada = senha.value;
    if (entrada.length < 8) {
        alert('Senha com mínimo de 8 caracteres.');
    } else {
        window.location.href = 'index1.html';
    }
}

