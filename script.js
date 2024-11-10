document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    const clearButton = document.getElementById("clear");
  
    let input = ""; // Variável para armazenar a entrada do usuário
  
    // Função para atualizar o display
    function updateDisplay(value) {
      display.value = value;
    }
  
    // Evento de clique para cada botão
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.textContent;
  
        if (value === "=") {
          try {
            input = eval(input); // Calcula a expressão
          } catch {
            input = "Erro"; // Em caso de erro, exibe "Erro"
          }
        } else if (value === "C") {
          input = ""; // Limpa a entrada
        } else {
          input += value; // Adiciona o valor ao input
        }
  
        updateDisplay(input); // Atualiza o display com o valor atual do input
      });
    });
  
    // Limpar a tela quando clicar no botão "C"
    clearButton.addEventListener("click", () => {
      input = "";
      updateDisplay("");
    });
  });
  