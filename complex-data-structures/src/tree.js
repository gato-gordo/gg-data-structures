var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  for(var key in treeMethods){
  	newTree[key] = treeMethods[key];
  }

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push(Tree(value));
};

treeMethods.contains = function(target){
	return 	this.value === target ||
					this.children.some( child => child.contains(target) );
};

