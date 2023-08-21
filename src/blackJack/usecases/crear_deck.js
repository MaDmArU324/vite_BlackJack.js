import _ from 'underscore'

// export let a = 'hello world';

/** 
 * @param {Array<String>} tiposCarta example: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales example: ['A','J','Q','K']
 * @returns {Array<String>} retorna el deck
*/
export const crearDeck = (tiposCarta, tiposEspeciales) => {
    if(!tiposCarta || tiposCarta.length ===0)throw new Error('Tipos de cartas es oblitario y no debe estar vacio' )
    if(!tiposEspeciales || tiposEspeciales.length ===0) throw new Error('Tipos especiales de cartas es oblitario y no debe estar vacio' )
    let deck = []
    for(let i = 2; i <= 10; i++) {
        for(let tipo of tiposCarta) {
            deck.push( i + tipo);
        }
    }

    for(let tipo of tiposCarta) {
        for(let especiales of tiposEspeciales) {
            deck.push( especiales + tipo);
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck  ;
};
// export default crearDeck();
