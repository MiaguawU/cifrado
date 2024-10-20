const assert = require('assert');
const cif = require('../scr/cifrar'); 


describe('Function cif', function() {
    describe('Evlaur', function() {
    it('Mostrar error si los campos estan vacios',  function() {
        const result = cif(" ", " ");
        assert.equal(result, "Introduzca los datos solicitados");
    });

    it('Mostrar error al introducir numeros en la clave',  function(){
        const result = cif("cla3898923832", "texto");
        assert.equal(result, "No puede tener números la clave");
    });

    it('Mostrar resultado correcto', function() {
        const result = cif("pepe", "aaaa bbbb");
        assert.equal(result, "pepe qfqf ");
    });

    it('Mostrar resultado correcto cuando tiene caracteres especiales',  function() {
        const result = cif("pepe", "aaaè bbbb");
        assert.equal(result, "pepè qfqf ");
    });
});
});
