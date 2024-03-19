
export const palindromo = ( word ) =>{
    // TODO verificar si la palabra es palindromo
    // Se lee igual de derecha a izquierda e izquierda a derecha
   
    // Eliminamos los espacios en blanco y convertimos todo a minúsculas
   const wordLowerCase = word.toLowerCase().replaceAll(" ","")
   //                            .replace(/\s/g, "");

  // Comparamos la palabra original con su versión invertida
  return wordLowerCase === wordLowerCase.split("").reverse().join("");
    return true;
}