var Stack = function() {
	var someInstance = Object.create(stackMethods);
	someInstance.len = 0;
	someInstance.storage = {};
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
			delete this.storage[this.len - 1];
			this.len--;
		}
		return popped;
	},
	size: function(){
		return this.len;
	}
};


