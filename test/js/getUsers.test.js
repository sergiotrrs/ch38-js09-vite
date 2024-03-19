import { getUsersUsignFetch, getUsersUsingAxios } from "../../src/js/getUsers";

 const url = "https://reqres.in/api/users?page=2";

// Probar api Fetch
test("El array de Users no está vacío", async()=>{
    const users = await getUsersUsignFetch( url );
    // Verificar que users sea un array
    expect( Array.isArray( users)  ).toBe( true );
    expect( Array.isArray( users)  ).toBeTruthy();
    // Verificar que no sea un array vacío
    expect( users.length > 0 ).toBe( true );
    expect( users.length ).toBeGreaterThan(0);
});

// Probar api Axios
test("El array de Users no está vacío usando Axios", async()=>{
     const users = await getUsersUsingAxios( url );
    //const users = await getUsersUsingAxios( "/" );
    // Verificar que users sea un array
    expect( Array.isArray( users)  ).toBe( true );
    expect( Array.isArray( users)  ).toBeTruthy();
    // Verificar que no sea un array vacío
    expect( users.length > 0 ).toBe( true );
    expect( users.length ).toBeGreaterThan(0);
});

