function removeDuplicates(llist) {
    const sinRepetidos = new SinglyLinkedList();
    let x = llist;
    let y = llist.next;
    while(y != null){
        if(x.data != y.data){
            sinRepetidos.insertNode(x.data);
        }
        x = y;
        y = y.next;
    }
    sinRepetidos.insertNode(x.data);
    return sinRepetidos.head;
}
