const usuarioform = document.getElementById("novousuario");
const nomeinput = document.getElementById("nome");
const idadeinput = document.getElementById("idade");
const cursoinput = document.getElementById("curso");

usuarioform.addEventListener("submit", function (event) {
    event.preventDefault();
    const nomevalor = nomeinput.value;
    const idadevalor = idadeinput.value;
    const cursovalor = cursoinput.value;
    const novousuario = {
        nome: nomevalor,
        idade: idadevalor,
        curso: cursovalor,
    };

    nomeinput.value = "";
    idadeinput.value= "";
    cursoinput.value= "";
    console.log(novousuario);

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(novousuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    window.location.href = "index.html";
}) 