function Stack() {
    //use an array to store test cases
    var items = [];
    // add test case into stack
    this.push = function (element) {
        items.push(element);
    };
    // delete and return the last test case
    this.pop = function () {
        return items.pop();
    };
}