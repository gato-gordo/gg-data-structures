var Queue = function() {
	var someInstance = Object.create(queueMethods);
	someInstance.len = 0;
	someInstance.storage = {}; 
	return someInstance;
};

var queueMethods = {
	enqueue: function(val){
		this.storage[this.len] = val;
		this.len++;
	},
	dequeue: function(){
		var dequeued;
		if(this.len){
			var i = 0;
			dequeued = this.storage[i];
			while(i < this.len - 1){
				this.storage[i] = this.storage[i + 1];
				i++;
			}
			delete this.storage[this.len - 1];
			this.len--;
		}
		return dequeued;
	},
	size: function(){
		return this.len;
	}
};


