function login(){
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let erro = document.getElementById("erro");

    if(nome === "admin" && senha === "1234"){
        erro.innerText = "Login realizado com sucesso!";
        erro.style.color = "lightgreen";
    } else {
        erro.innerText = "Nome ou senha incorretos!";
        erro.style.color = "red";
    }
}