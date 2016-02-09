var Stack = function() {
	var someInstance = {
		len: 0,
		storage: {}
	}
	for(var key in stackMethods){
		someInstance[key] = stackMethods[key];
	}
	return someInstance;
};

var stackMethods = {
	push: function(val){
		this.storage[this.len] = val;
		this.len++;
	},
	pop: function(val){
		var popped;
		if(this.len){
			popped = this.storage[this.len - 1];
			this.len--;
		}
		return popped
	},
	size: function(val){
		return this.len;
	}
};


