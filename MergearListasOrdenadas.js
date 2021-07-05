function mergeLists(head1, head2) {
    const listaMergeada = new SinglyLinkedList();
    let x = head1;
    let y = head2;
    while(x != null && y != null){
        if (x.data < y.data){
            listaMergeada.insertNode(x.data);
            x = x.next;
        }
        else{
            listaMergeada.insertNode(y.data);
            y = y.next;
        }
    }
    if(x == null){
        while(y != null){
            listaMergeada.insertNode(y.data);
            y = y.next;
        }
    }
    else{
        while(x != null){
            listaMergeada.insertNode(x.data);
            x = x.next;
        }
    }
    return listaMergeada.head;
}
