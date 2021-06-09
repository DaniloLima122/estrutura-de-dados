const Fila = (tamanho = 0) => {
    let head = 0;
    let tail = 0;
    const fila = [];

    const filaVazia = () => {

        return head === tail;
    }

    const enqueue = (item) => {
        const filaEstaCheia = tail > tamanho - 1; 
        
        if(filaEstaCheia) {
            console.log("Fila já atingiu o limite")
            return;
        }

        fila[tail++] = item;
        
    }
    
    const dequeue = () => {
        
        if(filaVazia()) { 
            console.log("A fila está vazia");
            return ;
        }

        const removedItem = fila.splice(0,1);

        return removedItem[0];
    }
    
    const peek = () => {
        
        if(filaVazia()) {
            console.log("A fila está vazia")
            return;
        }

        return fila[head];
    }

    const mostrarFila = () => {
        
        if(filaVazia()) { 
            console.log("A fila está vazia");
            return;
        }

        return fila;
    }

    return {
        enqueue,
        dequeue, 
        peek,
        mostrarFila
    }

}


const fila = Fila(3);

fila.enqueue(4);
fila.enqueue(5);
fila.enqueue(6);

console.log(fila.peek());

console.log(fila.mostrarFila());