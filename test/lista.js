/**
 * En una lista vacía hay cero elementos.
 * Cuando se agrega un elemento a una lista vacía hay un elemento.
 * Cuando se agregan dos elementos a una lista vacía hay dos elementos. 
 * En una lista vacía no se encuentra ninguna clave.
 * Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
 * Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
 * Cuando se agrega una clave que ya está en la lista no cambia la cantidad de elementos almacenados.
 * Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
 * Cuando se agrega un elemento al principio la lista de claves esta ordenada.
 * Cuando se agrega un elemento al final la lista de claves esta ordenada.
 */

const { assert } = require("chai");

//const expect = require("chai").expect;
const Lista = require("../src/lista.js")

describe ("lista de pares clave:valor", function(){
    describe("en una lista vacia", function(){
        var lista = new Lista();
        it("En una lista vacia hay cero elementos", function(){
            assert.equal(lista.count(), 0);
        })
    
        it("En una lista vacia hay cero elementos", function(){
            assert.isNull(lista.find("clave"));
        })
    })
    describe("Cuando se agrega un elemento a una lista vacia", function(){
        var lista = new Lista();
        lista.add("clave","valor");

        it ("hay un elemento almacenado", function(){
            assert.equal(lista.count(),1)
        })

        it("Se recupera el valor asociado a la clave del elemento agregado", function(){
            assert.equal(lista.find("clave"), "valor");
        })

    })

    describe("Cuando se agrega una clave que ya existe", function(){
        var lista = new Lista();
        lista.add("clave","valor");
        lista.add("clave",1234);

        it ("hay un elemento almacenado", function(){
            assert.equal(lista.count(),1);
        })

        it ("se recupera el valor actual del elemento agregado", function(){
            assert.equal(lista.find("clave"),1234);
        })
        it ("no cambia cantidad de elementos almacenados", function(){
            assert.equal(lista.count(),1);
        })
    })
    describe("Cuando se agregan varios elementos a una lista", function(){
        var lista = new Lista();
        lista.add("cadena","valor");
        lista.add("numero",1234);

        it ("hay dos elementos almacenados", function(){
            assert.equal(lista.count(),2);
        })

        it ("se recupera el valor actual del elemento agregado", function(){
            assert.equal(lista.find("numero"),1234);
        })
    })
    // 
    describe("Cuando se agrega un elemento a lista vacía esta está ordenada.", function(){
        var lista = new Lista();
        lista.add("cadena0","valor0");

        it ("hay 1 elementos almacenados", function(){
            assert.equal(lista.count(),1);
        })

        it ("la lista está ordenada", function(){
            assert.equal(lista.order(0),"valor0");
        })
    })

    describe("Cuando se agrega un elemento al principio la lista de claves esta ordenada.", function(){
        var lista = new Lista();
        lista.add("cadena2","valor2");
        lista.addinit("cadena1","valor1"); 

        it ("hay dos elementos almacenados", function(){
            assert.equal(lista.count(),2);
        })

        it ("la lista está ordenada", function(){
            assert.equal(lista.order(0),"valor1");
            assert.equal(lista.order(1),"valor2");
        })
    })
    describe("Cuando se agrega un elemento al final de la lista de claves esta ordenada.", function(){
        var lista = new Lista();
        lista.add("cadena2","valor2");
        lista.addinit("cadena1","valor1");
        lista.add("cadena3","valor3");


        it ("hay 3 elementos almacenados", function(){
            assert.equal(lista.count(),3);
        })

        it ("la lista está ordenada", function(){
            assert.equal(lista.order(0),"valor1");
            assert.equal(lista.order(1),"valor2");
            assert.equal(lista.order(2),"valor3");
        })
    })
    
})
