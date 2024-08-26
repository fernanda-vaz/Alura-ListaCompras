import { criarItemDaLista } from "./criarItem.js";
import { verificarLista } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-compras");

export function adicionarItem(evento) {
  evento.preventDefault();

  if (item.value === "") {
    alert("Por favor, insira um item!");
    return;
  }

  const itemDaLista = criarItemDaLista(item.value);
  listaDeCompras.appendChild(itemDaLista);
  verificarLista(listaDeCompras);
  item.value = "";
}
