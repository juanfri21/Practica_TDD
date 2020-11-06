/**
 * En una lista vacía hay cero elementos.
 * Cuando se agrega un elemento a una lista vacía hay un elemento.
 * En una lista vacía no se encuentra ninguna clave.
 * Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
 * Cuando se agrega una clave que ya está en la lista no cambia la cantidad de elementos almacenados.
 * Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
 * Cuando se agrega un elemento al principio la lista de claves esta ordenada.
 * Cuando se agrega un elemento al final la lista de claves esta ordenada.
 * **/

const assert = require('chai').assert;
const Lista = require('../src/lista.js');

describe('En una lista vacia', function () {
	it('Hay cero elementos', function () {
		var lista = new Lista();
		assert.equal(lista.count(), 0);
	});
});

describe('Cuando se agrega un elemento en una lista vacia', function () {
	it('Hay un elemento', function () {
		var lista = new Lista();
		lista.add('name', 'juan');
		assert.equal(lista.count(), 1);
	});
});
