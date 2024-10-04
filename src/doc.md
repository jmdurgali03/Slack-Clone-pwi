Desestructuracion de objetos:

const props = {nombre: 'pepe', apellido: 'suarez'}

// Antes
const nombre = props.nombre
const apellido = props.apellido

// Ahora
const {nombre, apellido} = props

console.log(`Hola soy ${nombre} ${apellido}`)
console.log(`Hola soy ${nombre} ${apellido}`)
console.log(`Hola soy ${nombre} ${apellido}`)

//Version antigua

/* const saludar1 = (params) => {
    const nombre = params.nombre
    const apellido = params.apellido
    console.log(`Hola soy ${nombre} ${apellido}` )
} */

//Version mejorada
/* const saludar = ({nombre, apellido}) => {
    // paso los parametros destructurados
    console.log(`Hola soy ${nombre} ${apellido}` )
}
  

saludar({nombre: 'pedro', apellido: 'suarez'})
saludar({nombre: 'juan', apellido: 'suarez'}) */

--> Calidad de codigo
DRY: Dont Repeat Yourself.
YAGNI: You Arent Gonna Need It.
KISS: Keep It Simple, Stupid.