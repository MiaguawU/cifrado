const assert = require('assert');
const desc = require('../scr/descifrar'); 


describe('Function desc', function() {
    describe('Evaluar', function() {
    it('Mostrar error si los campos estan vacios',  function() {
        const result = desc(" ", " ");
        assert.equal(result, "Introduzca los datos solicitados");
    });

    it('Mostrar error al introducir numeros en la clave',  function(){
        const result = desc("cla3898", "texto");
        assert.equal(result, "No puede tener números la clave");
    });

    it('Mostrar resultado correcto', function() {
        const result = desc("pepe", "pepe qfqf");
        assert.equal(result, "aaaa bbbb ");
    });

    it('Mostrar resultado correcto cuando tiene caracteres especiales',  function() {
        const result = desc("pepe", "pepè qfqf");
        assert.equal(result, "aaaè bbbb ");
    });
});
});