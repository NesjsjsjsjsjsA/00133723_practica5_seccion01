const nuestroPrimeritoObjeto ={
    claveComoString: 'valor',
    aquiHayUnNumero: 3000,
    esUnBooleano: true,
    unObjetoAnidado:{ }
};

const nombre = 'Fran Quesada';
const escuela = 'Ficcc';
const profesora = {nombre, escuela};

const string = 'mi string'
string = 'otra cosa dif'
const objeto = {
    propiedad1: 'Estas en mi cespec nervercraker'
}

objeto.propiedad1 = 'Si'
objeto.propiedad1 = 'otroSi'

//const peligro = {
//propiedad1: 'hola'
//}

//peligro{
//prohibido: 'Esto si se puede hacer >DF'
//}

const heroes ={
    dc:['batsi', 'supi'],
    marvel: ['espiderman','iiron man']
}
const heoresDC= heroes.dc
//destructing
    //const {dc: heoresDC} = heroes

const dc = {
    heores: {
        batman: {
            nombre: 'Bruno diaz'
        },
        superman: {
            nomnre: 'Clark kent'
        }
    }
}

const {heroes: {batman}} = dc //deconstructing

const objeto = {
    nombre: 'Julio jaramillo',
    edad: 26,
}

const objetoCongelago = Object.freeze(objeto)
objetoCongelago.localidad = 'Madrid'

const nuevoObjeto = {
    ...objetoCongelago,
    localidad: 'Madrid'
}