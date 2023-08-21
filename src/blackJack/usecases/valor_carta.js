import { isString } from "underscore";

/** 
 * @param {String} carta example: "JH"
 * @returns {Number} retorna el valor de la carta dada
*/
export const valorCarta = ( carta ) => {
    if(!carta || !isString(carta)) throw new Error("La uncion tiene que llevar un string como argumento")
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}