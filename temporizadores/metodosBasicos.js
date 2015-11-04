/***************************************************************************
* Programa: metodosBasicos.js
*
* Descripción: Ejemplos del uso de las funciones del
*              modulo Timers.Node.js v5.0.0 Documentation
*              Programa ejecutado en la verión v4.2.1 de
*              node.
*              Estas funciones se encuentran en Stability: 3 - Locked
*              lo que indica que solo se hacen cambios por bugs, seguridad,
*              y desempeño.
* Versión: 1.0
*
* Fecha inicio: 03-Nov-2015.
*
* Autor: RodrigoEstra.
***************************************************************************/

//Las funciones del modulo Timers están incluidas como globales, por lo cual no
//se necesita importar el modulo con require.

//setTimeout(callback, delay[, arg][, ...])
//Permite el llamado de la función callback, después de que transcurra el delay
//en ms. Retorna un objeto timeoutObject, necesario para usar clearTimeout().
//Node no garantiza el llamado exacto en ms de la función, pero se trata de acercar.
//El tiempo depende de cuando termine el programa y registre el evento en la cola
//de eventos y los eventos que esten con mayor proridad en la cola.
//callback:function(){console.log("callback ejecutado después de  2 segundos");}
//delay: 2000
setTimeout(function(){console.log("callback ejecutado después de  2 segundos");}, 2000);
