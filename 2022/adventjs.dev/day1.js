/* Este año los elfos han comprado una máquina que envuelve regalos. Pero... ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

    const gifts = ['book', 'game', 'socks']
    const wrapped = wrapping(gifts)
    console.log(wrapped)
    //  [
    //      "******\n*book*\n******",
    //      "******\n*game*\n******",
    //      "*******\n*socks*\n*******"
    //    ] 

Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

Nota:El carácter \n representa un salto de línea.

¡Ojo!Asegúrate que pones el número correcto de * para envolver completamente el string.

¡Suerte! */

function wrapping(gifts) {
    let wrapped = []
  
    gifts.forEach(gift => {
      wrapped.push("*" + gift + "*")
    });
  
    for (let i = 0; i < wrapped.length; i++) {
      let gift = wrapped[i]
      let paper = ''
  
      for (let j = 0; j < gift.length; j++) {
        paper += "*"
      }
  
      wrapped[i] = (paper + "\n" + gift + "\n" + paper)
    }
  
    return wrapped
  }
  
  const gifts = ['book', '', 'socks', "bycicle", "great encyclopaedia of arts and sciences", "💀", "♥♥♥♥"]
  const wrapped = wrapping(gifts)
  
  wrapped.forEach(gift => console.log(gift + "\n"))
  
  /* [
       "******\n*book*\n******",
       "******\n*game*\n******",
       "*******\n*socks*\n*******"
     ] */