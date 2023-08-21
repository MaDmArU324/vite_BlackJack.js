import { pedirCarta, valorCarta, crearImagen } from "./index.js";
/** 
 * @param {Number} puntosMinimos example: 19
 * @param {Element} posicionCartasComput example: div
 * @param {Number} puntosComputadora example: 20
 * @returns {Number} retorna los puntos
*/
export const turnoComputadora = (deck, posicionCartasComput, puntosComputadora, puntosMinimos, puntosh = [] ) => {

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );

        puntosh[1].innerText = puntosComputadora;
        

        const cartaComputadora = crearImagen(carta)
        posicionCartasComput.append(cartaComputadora)

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}