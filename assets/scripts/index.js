// DOM = Document Object Model

// Seletores

// Os seletores do DOM são similares aos do CSS. Nos permitem acessar um elemento HTML específico selecionando por nome de tag, classe CSS, id, ou pseudo-seletores.

const paragraphElement = document.getElementById("descricao");

console.log("Selecionando por id => ", paragraphElement);

const boldElements = document.getElementsByClassName("bold");

// ATENÇÃO: o método getElementsByClassName() retorna uma HTMLCollection, que NÃO é uma Array. Portanto, não tente usar métodos de array nessa variável
console.log("Selecionando por classe CSS => ", boldElements);

const liElements = document.getElementsByTagName("li");

console.log("Selecionando por nome de tag => ", liElements);

// querySelector: método genérico que seleciona usando a mesma sintaxe do CSS. É útil quando precisamos de seletores mais avançados como os do CSS

// ATENÇÃO: o querySelector retorna a PRIMEIRA OCORRÊNCIA. Se houver mais resultados pra essa busca, serão ignorados

const lastLiElement = document.querySelector("li:last-child");

console.log("Selecionado com o querySelector =>", lastLiElement);

// querySelectorAll: igual ao querySelector, mas retorna TODAS as ocorrências da busca
// ATENÇÃO: querySelectorAll NÃO retorna um HTMLCollection, e sim um NodeList

const allLiElements = document.querySelectorAll(".bold > li");

console.log("Selecionando com o querySelectorAll => ", allLiElements);

// Manipulação

// Modificar o conteúdo textual
paragraphElement.innerText = "Fui manipulado por Javascript";

// Modificar posicionamento
boldElements[0].style.position = "absolute";
boldElements[0].style.bottom = "0";

// Fazer um elemento crescer progressivamente

const circleElement = document.querySelector(".circle");

let count = 0.5;

// setInterval(() => {
//   circleElement.style.transform = `scale(${count})`;
//   if (count < 3) {
//     count += 0.5;
//   }
// }, 2000);

// Eventos

// Selecionando caixa de texto

const textBoxElement = document.getElementById("textInput");

// Reagir à alterações causadas pelo usuários na caixa de texto

// Escutar qualquer alteração de valor na caixa de texto (quando o usuário digita algo)
textBoxElement.addEventListener("keyup", () => {
  // Transformar o conteúdo em maiúsculo
  textBoxElement.value = textBoxElement.value.toUpperCase();
});

// Menu Dropdown igual do MDN

// Seleciona o elemento ul
const ulElement = document.querySelector("ul");
// Seleciona o botão
const btn = document.getElementById("dropdown-btn");

// Escutar o clique no botão
btn.addEventListener("click", () => {
  // Remove a classe responsável por aplicar o estilo display: none, ou a coloca caso já tenha sido removida
  ulElement.classList.toggle("hidden");
});
