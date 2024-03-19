// paso 1, importar
import { sum } from "../../src/js/sum";

// Crear una función de prueba unitaria
// test("Mensaje de prueba", ()=>{}  );

test("Suma de 2 + 2 igual a 4", ()=>{
   // expect( funcionAProbar()   ).toBe( ResultdoEsperado );
   expect( sum(2, 2) ).toBe( 4 );
});

/** Probar números negativos */
test("Suma de números negativos", ()=>{
    expect( sum(-3, -6) ).toBe( -9 ) ;
    expect( sum(-100, 10 ) ).toBe( -90 ) ;
    expect( sum( -10, 0 ) ).toBe( -10 );
});

/** Probar decimales */
test("Suma de números decimales", ()=>{
    // En el caso de que la perdida de precisón no sea un
    // problema, podemos usar 
    expect( sum(.1, .1) ).toBeCloseTo( .2 );
    expect( sum(.1, .2) ).toBeCloseTo( .3 );
    expect( sum(.1, .3) ).toBeCloseTo( .4 );
    expect( sum(.1, .4) ).toBeCloseTo( .5 );
    expect( sum(.1, .5) ).toBeCloseTo( .6 );
    expect( sum(.1, .6) ).toBeCloseTo( .7 );
    expect( sum(.1, .7) ).toBeCloseTo( .8 );
    expect( sum(.1, .8) ).toBeCloseTo( .9 );
    expect( sum(.1, .9) ).toBeCloseTo(  1 );
});
