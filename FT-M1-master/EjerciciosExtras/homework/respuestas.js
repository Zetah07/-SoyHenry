// //"ej 8"

const { LinkedList } = require("../../05-EstructuraDeDatos-II/homework/homework");

// let izq = this.left.height();
// let der = this.right.height();
// if (Math.abs(izq - der) > 1) return false;
// return (this.left.balanced() && this.right.balanced());

// // ej 9

// let aux;
// for(let i = 0; i < array.length-1; i++) {
//   aux = array[0];
//   for(let j = 0; j < array.length-1; j++) {
//     if(orderFunction(aux, array[j+1]) === -1) {
//       array[j] = array[j+1];
//       array[j+1] = aux
//     } else aux = array[j+1];
//   }
// }
// // return array;

LinkedList.prototype.orderList = function (orderFunction) {
    let aux;
    let current = this.head;
    while (current.next) {
      aux = current.value;
      if (orderFunction(aux, current.next.value) === -1) {
        current.value = current.next.value;
        current.next.value = aux;
      }
      current = current.next;
    }
};

LinkedList.add(1);
LinkedList.add(7);
LinkedList.add(3);
LinkedList.add(5);
console.log(LinkedList);