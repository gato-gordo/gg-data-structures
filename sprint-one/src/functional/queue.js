var Queue = function(){
  var someInstance = {
    len: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[someInstance.len] = value;
    someInstance.len++;
  };

  someInstance.dequeue = function(){

    var dequed, len = someInstance.len;
    if(len){
      var i = 0;
      dequed = storage[i];
      while(i < len - 1){
        storage[i] = storage[i + 1];
        i++;
      }
      delete storage[len - 1];
      someInstance.len--;
    }
    return dequed;
  };

  someInstance.size = function(){
    return someInstance.len;
  };

  return someInstance;
};
