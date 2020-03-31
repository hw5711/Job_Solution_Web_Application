var Stack = require('./Stack');

test('Stack', function () {
    var stack = new Stack();
    //test data
    stack.push(8);
 
    expect(stack.pop()).toBe(8);
});