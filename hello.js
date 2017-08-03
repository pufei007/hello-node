'use strict';

var s = `hello`;
var a = 1;

function greet(name) {
    console.log(s + ',' + name + '!')
};

function add(num) {
    console.log(a + num)
}

module.exports = {
    greet: greet,
    add: add
};