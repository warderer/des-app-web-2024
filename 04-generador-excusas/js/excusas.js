// Generador de Excusas
const columnaA = [
    'En cuanto arreglemos el goteo de recursos',
    'En cuanto completemos las pruebas',
    'En cuanto hayamos optimizado el código',
]

const columnaB = [
    'del interfaz XML',
    'de la base de datos',
    'del sistema de ficheros'
]

const columnaC = [
    'del directorio LDAP',
    'de la máquina virtual de Java',
    'del servidor de aplicaciones'
]

// Crear una función que escoja una frase de cada columna de forma aleatoria y las combine en una excusa
function generarExcusa() {
    let fraseA = columnaA[Math.floor(Math.random() * columnaA.length)]
    let fraseB = columnaB[Math.floor(Math.random() * columnaB.length)]
    let fraseC = columnaC[Math.floor(Math.random() * columnaC.length)]
//  return fraseA + ' ' + fraseB + ' ' + fraseC
    return `${fraseA} ${fraseB} ${fraseC}`
}

function mostrarExcusa() {
    const excusa = generarExcusa()
    console.log(excusa)
    document.getElementById('excusa').innerHTML = excusa
}

// Llamar a la función mostrarExcusa
mostrarExcusa()