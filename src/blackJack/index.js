import _ from 'underscore';
import "/style.css";
import { valorCarta, pedirCarta, crearDeck, crearImagen, turnoComputadora } from './usecases';

const tipos      = ['C','D','H','S'],
    especiales = ['A','J','Q','K'];
    
let deck         = crearDeck(tipos, especiales),
    puntosJugador = 0,
    puntosComputadora = 0;

const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    console.log(carta)
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    
    const cartaJugador = crearImagen(carta)
    divCartasJugador.append( cartaJugador );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(deck, divCartasComputadora, puntosComputadora, puntosJugador, puntosHTML );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(deck, divCartasComputadora, puntosComputadora, puntosJugador, puntosHTML );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora(deck, divCartasComputadora, puntosComputadora, puntosJugador, puntosHTML);
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = crearDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});
