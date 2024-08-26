import { verificaListaComprados } from "./verificarListaComprados.js";
import { verificarLista } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-compras");
const listaComprados = document.getElementById("lista-comprados");

const excluirItem = (elemento) => {
  let confirmacao = confirm("Tem certeza que deseja excluir esse item?");

  if (confirmacao) {
    elemento.remove();

    verificarLista(listaDeCompras);
    verificaListaComprados(listaComprados);
  }
};

export { excluirItem };
