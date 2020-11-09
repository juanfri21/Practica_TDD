/**
• En una lista vacía hay cero elementos.
• En una lista vacía no se encuentra ninguna clave.
• Cuando se agrega un elemento a una lista vacía hay un elemento.
• Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
• Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
• Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
• Cuando se agrega un elemento al principio la lista de claves esta ordenada.
• Cuando se agrega un elemento al final la lista de claves esta ordenada.
**/

const assert = require('chai').assert;
const Lista = require('../src/lista.js');

describe('En una lista vacia', function () {
	var lista = new Lista();
	it('Hay cero elementos', function () {
		assert.equal(lista.count(), 0);
	});
	it('No se encuentra ninguna clave', function () {
		assert.equal(lista.count(), 0);
	});
});

describe('Cuando se agrega un elemento en una lista vacia', function () {
	var lista = new Lista();
	lista.add('name', 'juan');
	it('Hay un elemento', function () {
		assert.equal(lista.count(), 1);
	});
	it('Se puede recuperar el valor a partir de la clave.', function () {
		assert.equal(lista.getByKey('name'), 'juan');
	});
});
