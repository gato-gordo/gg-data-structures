var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if(list.head === null){
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var headVal;
    if(list.head !== null){
      headVal = list.head.value;
      list.head = list.head.next;
    }
    return headVal;
  };

  list.contains = function(target){
    var pointer = list.head;
    while(pointer !== null){
      if(pointer.value === target){
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

