export const editarItem = (elemento) => {
  let novoItem = prompt("Digite o novo item:");

  if (novoItem !== null && novoItem.trim() !== "") {
    const itemAtualizado = elemento.querySelector("#item-titulo");
    itemAtualizado.textContent = novoItem;

    const estavaComprado = elemento.querySelector(".input-checkbox").checked;

    const novaData = elemento.querySelector(".texto-data");
    novaData.textContent = `${new Date().toLocaleDateString("pt-BR", {
      weekday: "long",
    })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString(
      "pt-BR",
      { hour: "numeric", minute: "numeric" }
    )}`;

    if (estavaComprado) {
      elemento.querySelector(".input-checkbox").checked = true;
      elemento.querySelector(".checkbox-customizado").classList.add("checked");
      itemAtualizado.style.textDecoration = "line-through";
    }
  }
};
