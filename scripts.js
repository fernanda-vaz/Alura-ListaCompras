import { adicionarItem } from "./js/adicionarItem.js";
import { verificaListaComprados } from "./js/verificarListaComprados.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);

const listaComprados = document.getElementById("lista-comprados");
verificaListaComprados(listaComprados);