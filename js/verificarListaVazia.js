const listaVazia = document.getElementById("lista-vazia");

export function verificarLista(lista) {
  if (lista.querySelectorAll("li").length === 0) {
    listaVazia.style.display = "block";
  } else {
    listaVazia.style.display = "none";
  }
}
