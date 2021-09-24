var MinStack = function() {
  var items = []

  this.push = function(item) {
    items.push(item)
  }

  this.pop = function() {
    return items.pop()
  }

  this.top = function() {
    return items[items.length - 1]
  }

  this.getMin = function() {
    return Math.min(...items)
  }
}
/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  MinStack.items = []
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  console.log(1122, MinStack.items);
  // MinStack.items.push(val)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  // return MinStack.items.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  // return MinStack.items[items.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  // return Math.min(...MinStack.items)
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
var minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
console.log(666, MinStack.items);
console.log(minStack.getMin());
minStack.pop();
minStack.pop();
console.log(minStack.getMin());