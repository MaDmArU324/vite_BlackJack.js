
/** 
 * @param {Array<String>} deck example: ['JH', 'QD', '2D', '8D',...]
 * @returns {String} retorna la ultima carta del deck 
*/
export const pedirCarta = (deck=[]) => {
    if(!deck)throw new Error("Tienes que ingresar un array con strings")
    if ( deck.length === 0 ) throw 'No hay cartas en el deck';
    const carta = deck.pop();
    return carta;
}
