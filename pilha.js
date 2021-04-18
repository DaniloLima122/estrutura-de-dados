const Pilha = (tamanho = 0) => {
  let top = -1;
  const max = tamanho;
  let lista = [];

  const mostrarLista = () => {
    console.log(lista);
  };

  const push = (item) => {
    const listaEstaCheia = max - 1 === top;

    if (!max) {
      console.log("O tamanho da pilha não foi deinido");
      return;
    }

    if (!item || listaEstaCheia) {
      console.log("A pilha está esgotada");
      return;
    }

    lista[++top] = item;
    return item;
  };

  const pop = () => {
    const listaEstaVazia = top === -1;

    if (!max) {
      console.log("O tamanho da pilha não foi deinido");
      return;
    }

    if (listaEstaVazia) {
      console.log("A pilha já está vazia");
      return;
    }

    top--;
    lista.splice(-1);
  };

  return {
    push,
    pop,
    mostrarLista,
  };
};

const pilha = Pilha(6);

pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);
pilha.push(6);

pilha.pop();

pilha.mostrarLista();
