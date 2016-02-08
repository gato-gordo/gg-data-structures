var Stack = function(){
  var someInstance = {
    len: 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[someInstance.len] = value;
    someInstance.len++;
  };

  someInstance.pop = function(){
    var popped;
    if(someInstance.len > 0) {
      popped = storage[someInstance.len - 1];
      delete storage[someInstance.len - 1];
      someInstance.len--;
    }
    return popped;
  };

  someInstance.size = function(){
    return someInstance.len;
  };

  return someInstance;
};
