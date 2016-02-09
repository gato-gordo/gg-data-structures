var Stack = function() {
	this.len = 0;
	this.storage = {};
};

Stack.prototype.push = function(val){
	this.storage[this.len] = val;
	this.len++;
}

Stack.prototype.pop = function(){
	var popped;
	if(this.len){
		popped = this.storage[this.len - 1];
		delete this.storage[this.len - 1];
		this.len--;
	}
	return popped;
}

Stack.prototype.size = function(){
	return this.len
}


