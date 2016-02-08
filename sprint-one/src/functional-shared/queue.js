var Queue = function(){
  var someInstance = { 
      len: 0, 
      storage: {}
  };

  someInstance.enqueue 	= queueMethods.enqueue;
  someInstance.dequeue 	= queueMethods.dequeue;
  someInstance.size 		= queueMethods.size;


  return someInstance;
};

var queueMethods = {
	enqueue:  function(val){
		this.storage[this.len] =  val;
		this.len++;
	},
	dequeue: function(){
		var dequeued;
		var len = this.len;
		if(len){
			var i = 0
			dequeued  = this.storage[i];
			while(i < len - 1){
				this.storage[i] = this.storage[i + 1];
				i++;
			}
			delete this[len - 1];
			this.len--;
		}
		return dequeued;
	}, 
	size: function(){
		return this.len;
	}
};



