const itensComprados = document.getElementById("container-itens-comprados");

export function verificaListaComprados(lista) {
  if (lista.childElementCount === 0) {
    itensComprados.style.display = "none";
  } else {
    itensComprados.style.display = "block";
  }
}
