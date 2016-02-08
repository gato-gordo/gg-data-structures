var Queue = function(){
	this.len = 0;
	this.storage = {};
};

Queue.prototype.enqueue = function(val){
	this.storage[this.len] = val;
	this.len++;
}

Queue.prototype.dequeue = function(){
	var dequeued;
	if(this.len){
		var index = 0;
		dequeued = this.storage[index];
		while(index < this.len - 1){
			this.storage[index] = this.storage[index + 1];
			index++;
		}
		delete this.storage[this.len - 1];
		this.len--;
	}
	return dequeued;
}

Queue.prototype.size = function(){
	return this.len;
}


