"use strict";

var lista = [1, 2, 3, 4, 5, 6, 7];
lista.map(function (n) {
  return n * 2;
}).forEach(function (n) {
  return console.log(n);
});
